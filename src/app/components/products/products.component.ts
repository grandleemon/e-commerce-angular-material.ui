import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/products";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[]
  productsSubscription: Subscription

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(res => this.products = res)
  }

  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe()
  }

}
