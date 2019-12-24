import { ModalInfoPage } from './../modal-info/modal-info.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'Sergio',
        country: 'Venezuela'
      }
    });
    return await modal.present();
  }

}
