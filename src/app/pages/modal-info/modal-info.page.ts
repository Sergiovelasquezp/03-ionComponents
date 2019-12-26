import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() name: string;
  @Input() country: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  
  exitModal() {
    this.modalController.dismiss({
      jobOrder: '999202133',
      jobId: '123455667'
    });

  }

}
