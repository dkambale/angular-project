import { Injectable } from '@angular/core';
import { Product } from './classes/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:Product;
  products:Product[]=[];

  constructor() {
    this.product={name:"product1",price:10}
   }
}
