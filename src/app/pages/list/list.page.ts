import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list', {static: false}) list: IonList;
  users: Observable<any>;
  constructor(
    private DATA_SERVICE: DataService,
  ) {
    this.showUsers();
  }

  ngOnInit() {
  }

  showUsers() {
    this.users = this.DATA_SERVICE.getUsers();
  }

  deleteItem(id) {
    console.log(`Item ${id} borrado`);
    this.list.closeSlidingItems();
  }

}
