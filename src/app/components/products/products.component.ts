import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../models/products";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[]
  productsSubscription: Subscription
  canEdit = false

  constructor(private productsService: ProductsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    // imitating request to check right
    this.canEdit = true
    this.productsSubscription = this.productsService.getProducts().subscribe(res => this.products = res)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(data => this.postData(data))
  }

  postData(data: IProduct) {
    this.productsService.addProduct(data).subscribe(data => this.products.push(data))
  }

  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe()
  }

}
