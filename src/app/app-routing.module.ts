import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AuthComponent } from './components/auth/auth.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductCategoriesComponent } from './components/products/product-categories/product-categories.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { ProductsComponent } from './components/products/products.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserViewComponent } from './components/users/user-view/user-view.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home' , component:HomeComponent},
  {path:'auth' , component:AuthComponent},
  {path:'contactus' , component:ContactusComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path:'products' , children: [
    { path :'', component: ProductsComponent },
    { path :'create', component: ProductCreateComponent },
    { path :'view', component: ProductViewComponent },
    { path :'categories', component: ProductCategoriesComponent },
  ]},
  {path:'users' , children: [
    { path :'', component: UsersComponent },
    { path :'create', component: UserCreateComponent },
    { path :'view', component: UserViewComponent },
  ]},
  {path:'orders' , component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
