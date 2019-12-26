import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/interfaces/menu-items.interface';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
})
export class MenuContentComponent implements OnInit {
  menuItems: MenuItems[];
  constructor( private dataService: DataService) {
    this.getMenuData();
  }
  ngOnInit() {}

  getMenuData() {
    return this.dataService.getMenuItems().subscribe(
      (data: any) => {
        console.log(data);
        this.menuItems = data;
      }
    );
  }

}
