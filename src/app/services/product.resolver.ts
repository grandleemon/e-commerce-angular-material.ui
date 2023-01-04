import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {catchError, EMPTY, Observable} from 'rxjs';
import {IProduct} from "../models/products";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private readonly productsService: ProductsService, private readonly router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productsService.getProductDetails(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['/products'])
        return EMPTY;
      })
    )
  }
}
