import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  //@ts-ignore
  @Input() rating: number
  @ViewChild('star') star: any




  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewChecked(){
    let width = 80 * this.rating /5;

    this.star.nativeElement.style.width = width.toString() + 'px'
  }
  onclick(){

  }





}
