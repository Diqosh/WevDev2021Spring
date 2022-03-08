import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CategoryService} from "../services/category.service";

export interface category{
  id: number
  name: string
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // @ts-ignore
  categories: category[]
  isActive: boolean


  constructor(
    private service: CategoryService,
    private el: ElementRef,
    ) {
    this.isActive = false
    this.categories = service.getServices()
  }

  ngOnInit(): void {

  }
  print(e: any){
    let elems = this.el.nativeElement.querySelectorAll(".category__item")

    elems.forEach((elem: any) => {
        elem.style.background = "#fff"
      }
    )


    this.isActive = !this.isActive
    if (this.isActive)
     e.target.style.backgroundColor = "#f86ff6"
    else
      e.target.style.backgroundColor = "#ffffff"
    console.log(e.target)


  }


}

