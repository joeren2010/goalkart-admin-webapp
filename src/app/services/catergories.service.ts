import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private HttpClient: HttpClient) { }

  getCategories() {
    return this.HttpClient.get<any[]>('../../assets/json/categories.json');
  }

}
