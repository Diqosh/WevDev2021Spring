import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../app.component";

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], needCATId: number[]): Product[] {
    console.log("needCATId: " + needCATId)
    if(needCATId.length == 0){
      return products;
    }

    return products.filter(product =>
       needCATId.includes(product.category)
    )

  }

}
