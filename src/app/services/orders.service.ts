import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private HttpClient: HttpClient) { }

  getOrders() {
    return this.HttpClient.get<any[]>('../../assets/json/orders.json');
  }

}
