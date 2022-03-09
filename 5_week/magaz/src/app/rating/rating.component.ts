import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  //@ts-ignore
  @Input() rating: number
  constructor() { }

  ngOnInit(): void {
  }

}