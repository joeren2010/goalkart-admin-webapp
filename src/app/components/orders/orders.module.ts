import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderTrackComponent } from './order-track/order-track.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderCreateComponent,
    OrderViewComponent,
    OrderTrackComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
