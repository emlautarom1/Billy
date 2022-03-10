import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BillyService } from '../billy.service';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {
  participants$!: Observable<Participant[]>;

  constructor(
    private billy: BillyService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.participants$ = this.billy.getParticipants();
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

  deleteParticipant(participant: Participant) {
    this.billy.deleteParticipant(participant)
  }
}
