import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../app.component";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  // @ts-ignore
  @Input("myProduct") product : Product


  constructor() {

  }

  ngOnInit() {

  }

  share(link : any){

      window.alert(`You will be redirected to Telegram`);
      window.open(`https://t.me/share/url?url=${link}&text=Hi! Check this on Amazon!`)
  }

}
