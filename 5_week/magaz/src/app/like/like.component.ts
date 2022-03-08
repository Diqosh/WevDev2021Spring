import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../app.component";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent   {
  // @ts-ignore
  @Input() like: number
  image_src

  isActive: boolean;
  constructor() {
    this.isActive = false
    this.image_src = 'assets/img/heart-crack-solid.svg'
  }

  onClick(){

    this.like = !this.isActive ? ++this.like : --this.like
    this.isActive = !this.isActive
    this.image_src = this.isActive ? 'assets/img/heart-solid.svg' :  'assets/img/heart-crack-solid.svg'



  }



}
