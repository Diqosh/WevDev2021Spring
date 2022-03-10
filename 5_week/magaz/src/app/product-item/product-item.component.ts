import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../app.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  {
  //@ts-ignore
  @Input() product : Product
  //@ts-ignore
  @Output() onDeleteProduct : EventEmitter<number> = new EventEmitter<number>();
  constructor() {

  }

  share(link: any){
    window.alert(`You will be redirected to Telegram`);
    window.open(`https://t.me/share/url?url=${link}&text=Hi! Check this on Amazon!`)

  }


  delete(deleteProductID: number){
    this.onDeleteProduct.emit(deleteProductID);
  }



}
