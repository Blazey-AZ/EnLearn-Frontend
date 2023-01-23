import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountServiceService } from '../_services/account-service.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService:AccountServiceService, private toastr:ToastrService, private router: Router) {}


  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user=>{
        if(user) return true;
        else{
          this.toastr.error('Thou shan\'t pass!');
          this.router.navigateByUrl('/error404');
          return false;
        }
      })
    )
  }
  
}
