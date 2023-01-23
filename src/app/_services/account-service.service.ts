import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Principal } from '../_models/principal';


import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  baseUrl = 'http://localhost:5001/api/';

  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();


  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUserSource.next(user);
        }
      })
    )

  }

  principallogin(model: any) {
    return this.http.post<Principal>(this.baseUrl + 'account/principallogin', model).pipe(
      map((response: Principal) => {
        const principal = response;
        if (principal) {
          localStorage.setItem('principal', JSON.stringify(principal))
          this.currentUserSource.next(principal);
        }
      })
    )

  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);


  }

  setCurrentPrincipal(principal: Principal) {
    this.currentUserSource.next(principal);


  }
  insertstudentdata(data: any) {
    this.http.post("http://localhost:5001/api/account/register",
      data).toPromise().then(result => { console.log(result); })
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }
  logoutprinci() {
    localStorage.removeItem('principal');
    this.currentUserSource.next(null);

  }



  newlogout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }
}
