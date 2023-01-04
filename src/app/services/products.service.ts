import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://localhost:3000/products"

  constructor(private readonly http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(this.url)
  }

  getProductDetails(id: number) {
    return this.http.get<IProduct[]>(`${this.url}/${id}`)
  }
}
