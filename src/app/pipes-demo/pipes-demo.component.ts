import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
today:any;
name:string ="C-Tel Info Systems";
  constructor() { }

  ngOnInit(): void {
    this.today = Date.now();
    console.log(this.today)
  }

  employess:any = [
    {name:'Rukmini',empId:'A1023',gender:'Female', AnnualSalary:500000, dob:'25/6/1998'},
    {name:'Karthik',empId:'A1024',gender:'Male', AnnualSalary:505000, dob:'25/6/1996'},
    {name:'Sandeep',empId:'A1025',gender:'Male', AnnualSalary:450000, dob:'25/6/1993'},
  ]
}
