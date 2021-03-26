import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import {ProductService} from '../../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[]
  wishlist :number[] = []
  constructor(private productService:ProductService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((product)=>{
      this.productList=product;
    })
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds =>this.wishlist=productIds)
  }
}
