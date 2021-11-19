import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/Customer';
import { Order } from '../classes/Order';
import { Product } from '../classes/Product';
import { CustomerService } from '../customer.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customerService:CustomerService;
  productService:ProductService;
  orders:Order[];
  order:Order;
  selectedProduct:Product;
  selectedCustomer:Customer;
  constructor(
    private cs:CustomerService,
    private ps:ProductService
  ) { 
    this.customerService=cs;
    this.productService=ps;
    this.orders=[];
    this.order={
      customer:new Customer(),
      products:[],
      total:0
    }
    this.selectedCustomer=new Customer();
    this.selectedProduct=new Product();
  }
  setDefaultValueToOrder(){
    this.order={
      customer:new Customer(),
      products:[],
      total:0
    }
  }

  ngOnInit(): void {
  }

  addProduct(){
    if(this.selectedProduct.name!='') {
      this.order.products.push(this.selectedProduct);
      let gTotal=this.order.products.map(ele=>ele.price).reduce((a,b)=>a+b,0);
        this.order.total=gTotal;
    }
  }

  submitOrder() {
    if(this.selectedCustomer.name!=''){
      if(this.order.products.length!=0) {
        this.order.customer=this.selectedCustomer;
        let gTotal=this.order.products.map(ele=>ele.price).reduce((a,b)=>a+b,0);
        this.order.total=gTotal;
        this.orders.push(this.order);
        this.setRewardToCustomer();
        this.setDefaultValueToOrder();
        

      }else{
        alert("select product")
      }

    } else {
      alert("select Customer")
    }

  }

  setRewardToCustomer() {
    if(this.selectedCustomer.name!=''){
      this.customerService.customers.filter(ele=>ele.name==this.selectedCustomer.name).map(cust=>cust.reward= cust.reward+this.order.total/10)
    }

  }

}
