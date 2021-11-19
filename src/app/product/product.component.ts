import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productService:ProductService

  constructor( private pService:ProductService) { 
    this.productService=pService;
  }
  ngOnInit(): void {

  }

  saveProduct(){
    let newProduct={name:this.productService.product.name,price:this.productService.product.price};
    this.productService.products.push(newProduct);
  }

}
