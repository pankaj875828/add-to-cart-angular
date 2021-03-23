import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { CartItem } from '../models/cart-item';
import { cartUrl } from 'config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map(result => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExits = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExits = true
              break;
            }
          }

          if (!productExits) {
            cartItems.push(new CartItem(item.id,item.product))
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
}
