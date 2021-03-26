import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { FiltersComponent } from './component/shopping-cart/filters/filters.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shopping-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {PageNotFoundComponent} from './component/shared/page-not-found/page-not-found.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    FiltersComponent,
    ProductListComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
