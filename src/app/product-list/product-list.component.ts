import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
 selector: 'app-product-list',
 templateUrl: './product-list.component.html',
 styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products:IProducts[] = products;



 constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

    addToCart(obj: IProducts) {
        window.alert('Your product has been added to the cart!');
        this.cartService.addToCart(obj);}

 ngOnInit(): void {
    
    
 }

}