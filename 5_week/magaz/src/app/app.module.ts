import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductItemComponent } from './product-item/product-item.component';

import { ProductListComponent } from './product-list/product-list.component';
import { LikeComponent } from './like/like.component';
import { CategoriesComponent } from './categories/categories.component';
import { RatingComponent } from './rating/rating.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListComponent,
    LikeComponent,
    CategoriesComponent,
    RatingComponent,
    ProductFilterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
