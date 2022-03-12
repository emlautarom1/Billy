import { Component, OnInit } from '@angular/core';
import { AlertController, SelectCustomEvent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BillyService } from '../billy.service';
import { Item } from '../model/item';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
})
export class ParticipantsComponent implements OnInit {
  participants$!: Observable<Participant[]>;
  items$!: Observable<Item[]>;

  constructor(
    private billy: BillyService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.participants$ = this.billy.getParticipants();
    this.items$ = this.billy.getItems();
  }

  async addParticipant() {
    const alert = await this.alertController.create({
      header: "Add Participant",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Add",
          role: "submit"
        }
      ]
    });

    await alert.present();

    const { data, role } = await alert.onDidDismiss();
    if (role == "submit") {
      const participant = data.values as Participant;
      this.billy.addParticipant(participant)
    }
  }

  removeParticipant(participant: Participant) {
    this.billy.removeParticipant(participant)
  }

  setParticipantItems(participant: Participant, event: Event) {
    // See: https://github.com/ionic-team/ionic-framework/issues/24245
    const items = (event as SelectCustomEvent<Item[]>).detail.value;
    console.log(items);
    this.billy.setParticipantItems(participant, items);
  }
}
