import { Injectable } from '@angular/core';
import { Customer } from './classes/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;
  customers: Customer[] = [];
  constructor() {
    this.customer = { name: "Dadasaheb", reward: 10 }
  }
}
