import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private LOADING_CONTROLLER: LoadingController
  ) { }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.LOADING_CONTROLLER.create({
      message: 'Espere...',
      duration: 2000,
      spinner: 'crescent',
      translucent: true,
    });
    return loading.present();
  }

}
