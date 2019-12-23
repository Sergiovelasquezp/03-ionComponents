import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonItemSlidingPageRoutingModule } from './ion-item-sliding-routing.module';

import { IonItemSlidingPage } from './ion-item-sliding.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonItemSlidingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonItemSlidingPage]
})
export class IonItemSlidingPageModule {}
