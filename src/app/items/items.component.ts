import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BillyService } from '../billy.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items$!: Observable<Item[]>;

  constructor(
    private billy: BillyService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.items$ = this.billy.getItems();
  }

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
      const item = data.values as Item;
      this.billy.addItem(item);
    }
  }

  deleteItem(item: Item) {
    this.billy.deleteItem(item);
  }

}
