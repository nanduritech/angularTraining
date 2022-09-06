import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CommonService} from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardActivateService implements CanActivate {
Response:any;
  constructor(private commonService:CommonService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const routeParams = route.paramMap.get('id');
    const id = routeParams?+routeParams:0;
    this.commonService.getStadium(id).subscribe(res => {
      this.Response = res;
      console.log(this.Response);
    })
    if(this.Response == undefined){
      this.router.navigate(['/notfound']);
      return false;
    }
    return true;
    //throw new Error('Method not implemented.');
  }
}
