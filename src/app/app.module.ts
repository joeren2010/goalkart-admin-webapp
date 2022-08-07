import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersModule } from './components/orders/orders.module';
import { UsersModule } from './components/users/users.module';
import { ProductsModule } from './components/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SideNavbarComponent,  
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule, UsersModule, ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
