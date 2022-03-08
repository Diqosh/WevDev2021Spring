import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductItemComponent } from './product-item/product-item.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { LikeComponent } from './like/like.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    FilterProductPipe,
    ProductListComponent,
    LikeComponent,
    CategoriesComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
