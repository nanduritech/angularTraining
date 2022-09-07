import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Router} from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnChanges {
  sportsList!: { id: number; img: string; rating: number; title: string; landmark: string; }[];
  name: string = 'coach';
  title!: string;
  userText:string = "Saisudhakar";

  constructor(private commonService:CommonService,private router:Router,@Inject(DOCUMENT) private document:Document) { }

 

  ngOnInit(): void {
   this.getSports()
   this.title = "SportList";
   this.document.body.classList.add('body');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(){
    this.document.body.classList.remove('body');
  }
  
  getSports(){
    this.sportsList = this.commonService.getSports();
    
  }

  getRole($event:any){
    this.name = $event.target.value;
    console.log(this.name)
    if(this.name=='coach'){
      this.title = "CoachList"
    }else{
      this.title = "SportList"
    }
  }

  getDetails(stadiumid:number){
    this.router.navigate(['/stadiumDetails',stadiumid]);
  }

  

}
