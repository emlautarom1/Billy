import { Injectable } from '@angular/core';
import { Item } from './model/item';
import { Participant } from './model/participant';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillyService {
  private _participants$: BehaviorSubject<Participant[]> = new BehaviorSubject([]);
  private _items$: BehaviorSubject<Item[]> = new BehaviorSubject([]);
  private _assocs$: BehaviorSubject<Map<Item, Set<Participant>>> = new BehaviorSubject(new Map());

  constructor() {
    const startingItems = [
      { name: "Pizza", price: 800 },
      { name: "Beer", price: 400 }
    ];
    const startingParticipants = [
      { name: "Ana" },
      { name: "Bob" },
      { name: "Paul" },
      { name: "Susan" },
    ];

    startingItems.forEach((item) => this.addItem(item));
    startingParticipants.forEach((participant) => this.addParticipant(participant));
  }

  getItems(): Observable<Item[]> {
    return this._items$;
  }

  getParticipants(): Observable<Participant[]> {
    return this._participants$;
  }

  addItem(item: Item) {
    const allItems = this._items$.getValue();
    this._items$.next([...allItems, item]);

    const assocs = this._assocs$.getValue();
    assocs.set(item, new Set());
    this._assocs$.next(assocs);
  }

  addParticipant(participant: Participant) {
    const allParticipants = this._participants$.getValue();
    this._participants$.next([...allParticipants, participant]);
  }

  removeItem(item: Item) {
    const allItems = this._items$.getValue();
    this._items$.next(this.remove(allItems, item));

    const assocs = this._assocs$.getValue();
    assocs.delete(item);
    this._assocs$.next(assocs);
  }

  removeParticipant(participant: Participant) {
    const allParticipants = this._participants$.getValue();
    this._participants$.next(this.remove(allParticipants, participant));

    const assocs = this._assocs$.getValue();
    for (const [_, participants] of assocs) {
      participants.delete(participant);
    }
    this._assocs$.next(assocs);
  }

  setParticipantItems(participant: Participant, items: Item[]) {
    const allParticipants = this._participants$.getValue();
    if (allParticipants.indexOf(participant) < 0) {
      throw new Error("Invariant violation");
    }

    const assocs = this._assocs$.getValue();
    const allItems = this._items$.getValue();
    for (const item of items) {
      if (allItems.indexOf(item) < 0) {
        throw new Error("Invariant violation");
      }
      assocs.get(item).add(participant);
    }
    this._assocs$.next(assocs);
  }

  getSummary(): Observable<Map<Participant, number>> {
    return this._assocs$.pipe(
      map(assocs => {
        /*
        Calculate the splitted price of each Item.
        */
        const splittedPrice = new Map();
        for (const [item, participants] of assocs) {
          if (participants.size > 0) {
            splittedPrice.set(item, item.price / participants.size);
          }
        }

        /*
        For each Participant, find all the items in which its participant
        Sum the splitted price of each item.
        */
        const result = new Map<Participant, number>();
        for (const [item, participants] of assocs) {
          for (const participant of participants) {
            const acc = result.get(participant) ?? 0;
            const splitted = splittedPrice.get(item);
            result.set(participant, acc + splitted);
          }
        }

        return result;
      })
    );
  }


  /**
   * Remove the first occurence (if any) of `item` from `array`.
   * @param array the array which contains the `item`.
   * @param item the item to be removed.
   * @returns the updated `array`.
   */
  private remove<T>(array: T[], item: T) {
    let idx = array.indexOf(item);
    array.splice(idx, 1);

    return array;
  }
}
