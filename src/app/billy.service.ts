import { Injectable } from '@angular/core';
import { Item } from './model/item';
import { Participant } from './model/participant';
import { BehaviorSubject, combineLatest, merge, Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillyService {
  private _participants$: BehaviorSubject<Participant[]> = new BehaviorSubject([]);
  private _items$: BehaviorSubject<Item[]> = new BehaviorSubject([]);
  private _assocs$: BehaviorSubject<Map<Participant, Item[]>> = new BehaviorSubject(new Map());

  getItems(): Observable<Item[]> {
    return this._items$;
  }

  getParticipants(): Observable<Participant[]> {
    return this._participants$;
  }

  getSummary(): Observable<Map<Participant, number>> {
    return combineLatest([this._items$, this._assocs$]).pipe(
      map(([allItems, assocs]) => this.computeSummary(allItems, assocs))
    );
  }

  addParticipant(participant: Participant) {
    const allParticipants = this._participants$.getValue();
    this._participants$.next([...allParticipants, participant]);

    const assocs = this._assocs$.getValue().set(participant, []);
    this._assocs$.next(assocs);
  }

  addItem(item: Item) {
    const allItems = this._items$.getValue();
    this._items$.next([...allItems, item]);
  }

  associateParticipantWithItems(participant: Participant, items: Item[]) {
    const assocs = this._assocs$.getValue();
    assocs.set(participant, items);
    this._assocs$.next(assocs);
  }

  deleteParticipant(participant: Participant) {
    const allParticipants = this._participants$.getValue();
    this._participants$.next(this.remove(allParticipants, participant));

    const assocs = this._assocs$.getValue();
    assocs.delete(participant);
    this._assocs$.next(assocs);
  }

  deleteItem(item: Item) {
    const allItems = this._items$.getValue();
    this._items$.next(this.remove(allItems, item));

    const assocs = this._assocs$.getValue();
    for (let items of assocs.values()) {
      this.remove(items, item);
    }
    this._assocs$.next(assocs);
  }

  private computeSummary(allItems: Item[], assocs: Map<Participant, Item[]>): Map<Participant, number> {
    /*
    For each item, count the number of invoved participants.
    Then, split the price between the number of participants.
    */
    const perParticipantAmount: Map<Item, number> = new Map();
    for (let item of allItems) {
      let involvedParticipants = this.participantsInvolvedWithItem(item).length
      if (involvedParticipants > 0)
        perParticipantAmount.set(item, item.price / involvedParticipants);
    }

    /*
    For each participant, conver each association to the splitted prices calculated above.
    Then, add up all splitted prices.
    */
    const result: Map<Participant, number> = new Map();
    for (let [participant, items] of assocs) {
      let total = 0;
      for (let item of items) {
        total += perParticipantAmount.get(item) ?? 0;
      }
      result.set(participant, total);
    }

    return result;
  }

  private participantsInvolvedWithItem(item: Item): Participant[] {
    const assocs = this._assocs$.getValue();
    let participants = [];
    for (let [participant, items] of assocs) {
      if (items.indexOf(item) >= 0) {
        participants.push(participant);
      }
    }
    return participants;
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
