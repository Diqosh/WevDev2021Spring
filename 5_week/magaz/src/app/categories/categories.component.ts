import {Component, EventEmitter, Output} from '@angular/core';
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
export class CategoriesComponent  {
  @Output() onFilter: EventEmitter<number[]> = new EventEmitter<number[]>()
  // @ts-ignore
  categories: category[]
  isActive: boolean

  activeButtonsId: number[]

  constructor(
    private service: CategoryService) {
    this.isActive = false
    this.categories = service.getCategories()
    this.activeButtonsId = []
  }


  activate(id: number){
    this.isActive = !this.isActive
    if( this.activeButtonsId.includes(id))
      this.activeButtonsId = this.activeButtonsId.filter(item => item != id)
    else
      this.activeButtonsId.push(id)


    this.onFilter.emit(this.activeButtonsId)

  }


}

