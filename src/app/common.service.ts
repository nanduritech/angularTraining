import { Injectable } from '@angular/core';

export interface Stadium{
  id:number;
  img:string;
  rating:number;
  title:string;
  landmark:string
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 
   
  }
  StadiumList = [
    {id:1,img:'https://img.freepik.com/premium-photo/empty-baseball-stadium-arena-with-fans-crowd-sunny-day-lights_336913-605.jpg?w=2000',rating:4.6,title:'IndhiraGandhi Muncipal Stadium',landmark:'Benz Circle'},
    {id:2,img:'https://media.istockphoto.com/photos/table-tennis-equipment-picture-id1192307192?b=1&k=20&m=1192307192&s=170667a&w=0&h=zPZsq3-ehwsxh2waz0c31cggWRYiBmChmVeJXefYDM4=',rating:3.8,title:'Play Area',landmark:'Gandhi Nagar'},
    {id:3,img:'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?cs=srgb&dl=pexels-jonathan-petersson-399187.jpg&fm=jpg',rating:4.5,title:'UPPAL Stadium',landmark:'UPPAL,Hyderabad'},
    {id:4,img:'https://media.istockphoto.com/photos/volleyball-stadium-picture-id1216739474?k=20&m=1216739474&s=612x612&w=0&h=2xHSDGdAM7_QKvIPABh6yiSATmcfyLbY1_s8-3WesT8=',rating:4.8,title:'OUR Zone',landmark:'Vijayawada, Tadepalli'}
  ];

getSports(){
  return this.StadiumList;
}

}
