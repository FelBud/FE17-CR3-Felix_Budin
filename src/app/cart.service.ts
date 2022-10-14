import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
providedIn: 'root',
})
export class CartService {
items: IProducts[] = [];

product: number = 0;  
total: number= 0;

constructor() {}

addToCart(product: IProducts) {
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}

sumtotal() {
  this.total = 0;
  for (let item of this.items) {
   this.total += item.price;  
 }
 return this.total
}
}