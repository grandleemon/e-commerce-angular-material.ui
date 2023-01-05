import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {IProduct} from "../../models/products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  productSubscription: Subscription;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productSubscription = this.route.data.subscribe(data => this.product = data['data']
    )
  }
}
