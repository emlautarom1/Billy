import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Participant } from '../model/participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  participants: Participant[] = [
    { name: "Ana" },
    { name: "Bob" }
  ];

  ngOnInit() { }

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
      const participant = data.values;
      this.participants = [...this.participants, participant];
    }
  }

}
