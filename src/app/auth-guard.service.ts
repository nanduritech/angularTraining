import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from './admin/admin.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanDeactivate<AdminComponent> {
  constructor() { }
  
canDeactivate(component: AdminComponent): boolean  {
  if(component.registerForm.invalid){
    return confirm('Are youe Sure You want to discard changes');
  }
  return true;
}
  
}
