import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonItemSlidingPage } from './ion-item-sliding.page';

const routes: Routes = [
  {
    path: '',
    component: IonItemSlidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonItemSlidingPageRoutingModule {}
