import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient: HttpClient) { }

  getProducts() {
    return this.HttpClient.get<any[]>('../../assets/json/products.json');
  }

}
