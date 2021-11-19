import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Order {
    customer:Customer;
    products:Product[];
    total:number;
}