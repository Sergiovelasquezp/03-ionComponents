import { MenuItems } from './../interfaces/menu-items.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private HTTP: HttpClient ) { }

  getMenuItems() {
    return this.HTTP.get<MenuItems[]>('/assets/menu-items.json');
  }

}
