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

  share(link: any){
    window.alert(`You will be redirected to Telegram`);
    window.open(`https://t.me/share/url?url=${link}&text=Hi! Check this on Amazon!`)

  }



}
