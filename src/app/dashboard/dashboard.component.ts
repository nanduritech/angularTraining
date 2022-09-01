import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sportsList!: { id: number; img: string; rating: number; title: string; landmark: string; }[];

  constructor(private commonService:CommonService,private router:Router) { }

  ngOnInit(): void {
   this.getSports()
  }

  getSports(){
    this.sportsList = this.commonService.getSports();
  }

  getDetails(stadiumid:number){
    this.router.navigate(['/stadiumDetails',stadiumid]);
  }
}
