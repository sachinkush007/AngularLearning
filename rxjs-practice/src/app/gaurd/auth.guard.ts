import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from '../service/utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tutilityService:UtilityService){}
  canActivate(){
    if(this.tutilityService.isUserIsLoggedIn()){
      return true
    }
      else{
        window.alert('permission denied')
        return false
      }
    
  }
  
}
