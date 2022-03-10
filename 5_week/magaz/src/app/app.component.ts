import { Component } from '@angular/core';
import {ProductService} from "./services/product.service";

export interface Product{

  id: number
  category: number
  name: string
  likes: number
  rating: number
  image ?: string
  link ?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  needableIDs: number[]
  //@ts-ignore
  products: Product[];

  constructor(private service: ProductService) {
    this.products = service.getProducts();
    this.needableIDs = []
  }

  filter(filteringIDList: any){

    this.needableIDs = filteringIDList
    console.log("filteringIDList on app: "+filteringIDList)


  }
  deleteProduct(id: number){
    this.products = this.products.filter(
        product => product.id != id
      )
  }

}
