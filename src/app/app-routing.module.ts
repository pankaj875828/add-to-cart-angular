import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',redirectTo:'/shop',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shop',component:ShoppingCartComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
