import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getServices(){
    return [
      {
        id: 1,
        name: 'Keyboards'
      },
      {
        id: 2,
        name: 'Washing'
      },
      {
        id: 3,
        name: 'T-shorts'
      },
      {
        id: 4,
        name: 'Pikachu'
      },
    ]
  }
}
