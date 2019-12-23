import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {
  user = {
    email: '',
    password: '',
  }
  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }


}
