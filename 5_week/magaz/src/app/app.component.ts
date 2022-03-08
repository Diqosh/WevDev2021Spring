import { Component } from '@angular/core';
import {ProductService} from "./services/product.service";

export interface Product{
  id: number
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


  constructor() {

  }
}
