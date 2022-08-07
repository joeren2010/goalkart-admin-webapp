import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductViewComponent,  
    ProductCategoriesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
