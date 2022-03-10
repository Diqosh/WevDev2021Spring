import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../app.component";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //@ts-ignore
  @Input() products: Product[]
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  constructor() {


  }

  ngOnInit(): void {
  }
  print(id: number){
    this.onDelete.emit(id)
  }




}
