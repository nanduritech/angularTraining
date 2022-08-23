import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elemens',
  templateUrl: './elemens.component.html',
  styleUrls: ['./elemens.component.css']
})
export class ElemensComponent implements OnInit {
view!:boolean;
elseview="name";
  constructor() { }

  ngOnInit(): void {
  }

Products:any[] = [
{name:"tataMotors"},
{name:"Totyota"},
{name:"Mahindra & Mahindra"},
{name:"Maruti"},
{name:"Honda"}
 ];


 CompanyProducts:any[] = [
  {
    make:"TATA",
    products:[
    {name:"tataMotors"},
    {name:'tata Nexa'}
  ],
},
  {
    make:"Toyota",
    products:[
      { name:"Innova"}
    ]
   
  },
  {
    make:"Mahindra & Mahindra",
    products:[
      {name:"Scorpio"},
    ]
  },
   ];

   showElement(){
    this.view = !this.view
   }

   Course:string="Angular";

}
