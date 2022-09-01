import { Component, OnInit } from '@angular/core';
import { Routes,ActivatedRoute } from '@angular/router';
import { CommonService,Stadium } from '../common.service';
@Component({
  selector: 'app-stadium-details',
  templateUrl: './stadium-details.component.html',
  styleUrls: ['./stadium-details.component.css']
})
export class StadiumDetailsComponent implements OnInit {
stadium :Stadium | undefined
  //stadiumInfo: { id: number; img: string; rating: number; title: string; landmark: string; } | undefined;
  constructor(private routes:ActivatedRoute,private commonService:CommonService) { }

  ngOnInit(): void {
    this.getStadium();
  }

 getStadium(){
  const id = Number(this.routes.snapshot.paramMap.get('id'));
  console.log(id)
  this.commonService.getStadium(id).subscribe((stadium)=>{
    this.stadium = stadium;
    console.log(this.stadium)
  })
 }
}
