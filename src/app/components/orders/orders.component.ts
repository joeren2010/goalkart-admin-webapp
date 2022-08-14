import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderObservable: Observable<any[]> = new Observable();

  constructor(private ordersService: OrdersService) { }

  orderStatusIdx: number = 0;
  orderStatus: { name: string; value: number }[] = [
    { name: 'Placed', value: 0 },
    { name: 'Accepted', value: 1 },
    { name: 'Delivered', value: 2 },
    { name: 'Cancelled', value: 3 },
  ];

  viewOrderBool: boolean = false;
  viewOrderIdx: number | undefined;
  orderModel: any;

  ngOnInit(): void {
    this.orderObservable = this.ordersService.getOrders();
  }

  changeOrderStatus(orderStatusIdx: number) {
    this.orderStatusIdx = orderStatusIdx;
  }

  openViewModal(orderModel: any, viewOrderIdx: number) {
    console.log(orderModel);    
    this.viewOrderBool = true;
    this.viewOrderIdx = viewOrderIdx;
    this.orderModel = orderModel;
  }

  closeViewModal() {
    delete this.viewOrderIdx;
    delete this.orderModel;
    this.viewOrderBool = false;
  }
}
