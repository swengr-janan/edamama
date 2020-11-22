import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from '../models/product'
import {Observable} from 'rxjs'
import {productsUrl} from "src/app/config/api"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(productsUrl);
  }
}
