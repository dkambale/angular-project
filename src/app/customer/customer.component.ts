import { Component, OnInit } from '@angular/core';
import { Customer } from '../classes/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerService:CustomerService;
  constructor( private cs:CustomerService) {
    this.customerService=cs;
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    let customer = { name: this.customerService.customer.name, reward: this.customerService.customer.reward }
    this.customerService.customers.push(customer);
  }

}
