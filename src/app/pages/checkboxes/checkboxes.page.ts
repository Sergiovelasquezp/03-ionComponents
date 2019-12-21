import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.page.html',
  styleUrls: ['./checkboxes.page.scss'],
})
export class CheckboxesPage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];

  constructor() { }

  ngOnInit() {
  }

  checkValue (check) {
    console.log(check);
  }

}
