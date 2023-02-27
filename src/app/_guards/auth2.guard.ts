import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  
  constructor(private accountService:AccountServiceService, private toastr:ToastrService, private router: Router) {}


  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(principal=>{
        if(principal) return true;
        else{
          this.toastr.error('Thou shan\'t pass!');
          this.router.navigateByUrl('/error404');
          return false;
        }
      })
    )
  }
  
}
