import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {calcPossibleSecurityContexts} from "@angular/compiler/src/template_parser/binding_parser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //@ts-ignore
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('',Validators.required)
      }),
      skills: new FormArray([])
    })
  }


  submit() {
    // if(this.form.invalid){
    //
    // }else{
    //
    // }
    console.log("Form: ", this.form)
    const formData = {...this.form.value}
    console.log("form data: ",formData)
  }

  setCapital() {
    const cityMap = [['ru',  "Москва"],
      ['ua', "Киев"],
      ['by', "Минкс"]]


    let cityKey : string = this.form.get('address')?.get('country')!.value
    let city : any
    for (let cityMapElem of cityMap) {
      if(cityMapElem[0] === cityKey){
        city = cityMapElem[1]
      }
    }
    this.form.patchValue({
      address: {
        city
      }
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray)!.push(control);
  }

  getControls(){
    return (this.form.get("skills") as FormArray).controls;
  }


}
