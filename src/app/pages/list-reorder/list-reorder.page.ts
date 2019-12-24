import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  @ViewChild(IonReorderGroup, {static: false}) reorderGroup: IonReorderGroup;
  // users: Observable<any>;
  users: any[] = [];
  constructor( private DATA_SERVICE: DataService) {
    this.showUsers();
  }

  ngOnInit() {
  }

  showUsers() {
    return this.DATA_SERVICE.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      });
  }

  completeReorder(e) {
    const movedItem = this.users.splice( e.detail.from, 1)[0];
    this.users.splice(e.detail.to, 0, movedItem);
    this.reorderGroup.complete();
    console.log(this.users);
  }

}
