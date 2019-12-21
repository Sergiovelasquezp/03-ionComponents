import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  tasks: any[] = [];
  localData: any[] = [];
  constructor( private alertController: AlertController ) { 
    this.getTasks();
  }

  ngOnInit() {
    
  }
  async createTask() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'taskName',
          id: 'taskName',
          type: 'text',
          placeholder: 'Ingrese un nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            this.tasks.push({task: data.taskName});
            console.log(this.tasks);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          }
        }
      ]
    });

    await alert.present();
  }

  getTasks() {
    if (localStorage.getItem('tasks').length) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

}
