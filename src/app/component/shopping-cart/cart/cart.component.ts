import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from '../../../services/messanger.service'
import {CartService} from '../../../services/cart.service'
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1,productId:1,productName:'Item 1',qty:5,price:100},
    // {id:2,productId:3,productName:'Item 3',qty:2,price:60},
    // {id:3,productId:5,productName:'Item 5',qty:1,price:50},
    // {id:4,productId:7,productName:'Item 7',qty:4,price:90},
  ];

  cartTotal = 0;
  constructor(private msg: MessangerService,private cartService:CartService) { }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems()
    })
  }

  loadCartItems(){
    this.cartService.getCartItem().subscribe((items:CartItem[])=>{
      this.cartItems = items;
      this.calculateTotal();
    })
  }

  calculateTotal(){
    this.cartTotal=0;
    this.cartItems.forEach(item=>{
      this.cartTotal += (item.qty * item.price)
    })
  }

}
