import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../app.component";

@Component({
  selector: 'products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>()

  title = ''
  // @ts-ignore
  rating : number

  constructor() { }

  ngOnInit(): void {
  }
  addProduct() {
    if (this.title.trim() && !isNaN(+this.rating)) {
      const product: Product = {
        name : this.title,
        rating : this.rating,

      }
      this.onAdd.emit(product)
      this.title = ''
      this.rating = +""

    }else{
      alert("Type norm")
      this.title = ''
      this.rating = +""

    }


  }

}
