import { MenuItems } from './../../interfaces/menu-items.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: Observable<MenuItems[]>;
  constructor( private dataService: DataService) {
    this.menuItems = this.dataService.getMenuItems();
  }

  ngOnInit() {}

}
