import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../app.component";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //@ts-ignore
   products: Product[];
  constructor(private service: ProductService) {
    this.products = service.getProducts();
  }

  ngOnInit(): void {
  }

}