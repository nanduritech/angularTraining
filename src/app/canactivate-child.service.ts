import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
@Injectable({
  providedIn: 'root'
})
export class CanactivateChildService implements CanActivateChild {

  constructor(private commonService:CommonService,private router:Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   // throw new Error('Method not implemented.');
   let role = sessionStorage.getItem('name');
   if(role=='Stadiums'){
    return true;
   }else{
   // this.router.navigate(['notfound']);
    return false;
   }
   
  }
}
