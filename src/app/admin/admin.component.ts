import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  registerForm!:FormGroup;

  constructor(private fb:FormBuilder) { }
submitted!:boolean;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      surName:['',[Validators.required]],
      userName:['',[Validators.required]],
      district:['',[Validators.required]],
      mandal:['',[Validators.required]]
    })
   // this.validForm()
  //  this.registerForm.get('surName')?.setValue('Muvva');
  //  this.registerForm.get('surName')?.updateValueAndValidity();
  }

  validForm(){
   this.submitted = true;
   if(this.registerForm.invalid){
    return
   }else{
    console.log('Form Submitted Successfully');
   // console.log(this.registerForm.value);
    let object = {
      surname:this.registerForm.get('surName')?.value,
      userName:this.registerForm.get('userName')?.value
    }
    console.log(object);
   }
  }

  get rf(){return this.registerForm.controls}
 // rf -> registerForm

 districts:any = [
  {
    name:"Prakasam",
    value:"Prakasam",
    mandals:[{name:"prakasam1"},{name:"Prakasam2"}],
    villages:[
      {name:'Prakasam Village1',pincode:523169}
    ]
  },
  {
  name:"Guntur",value:"Guntur",
  mandals:[{name:"guntur1"},{name:"guntur2"}],
  villages:[{name:'Guntur Village1'}]
},
  {
    name:"Nellore",
    value:"Nellore",
    mandals:[{name:"Nellore1"},{name:"Nellore2"}],
    villages:[]
  },

 ]
 mandals:any= [];
 villages:any = [];
 
 getMandals(eve:any){
   let ele = eve.target.value;
   console.log(ele);
   this.districts.forEach((element:any) => {
     console.log('Value is',element.value);
     if(ele == element.value){
      this.mandals = [];
      this.mandals = element.mandals;
      console.log(this.mandals);
     }
   });
 }

}
