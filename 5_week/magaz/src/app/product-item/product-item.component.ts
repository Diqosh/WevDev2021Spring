import {Component, Input} from '@angular/core';
import {Product} from "../app.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  {
  //@ts-ignore
  @Input() product : Product
  constructor() {

  }

  //like




}
