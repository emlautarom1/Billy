import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Item } from '../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  constructor(private alertController: AlertController) { }

  items: Item[] = [
    { name: "Pizza", price: 850 },
    { name: "Beer", price: 300 },
  ];

  ngOnInit() { }

  async addItem() {
    const alert = await this.alertController.create({
      header: "Add Item",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Item"
        },
        {
          name: "price",
          type: "number",
          placeholder: "$",
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
      const item = data.values;
      this.items = [...this.items, item];
    }
  }

  removeAt(index: number) {
    this.items.splice(index, 1);
  }

}
