import { Office } from './../_models/office';
import { Interviewer } from './../_models/Interviewer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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


  private currentAdminSource = new BehaviorSubject<Principal | null>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();

  private currentInterviewerSource = new BehaviorSubject<Interviewer | null>(null);
  currentInterviewer$ = this.currentInterviewerSource.asObservable();

  private currentOfficeSource = new BehaviorSubject<Office | null>(null);
  currentOffice$ = this.currentOfficeSource.asObservable();


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

  principallogin(models: any) {
    return this.http.post<Principal>(this.baseUrl + 'account/principallogin', models).pipe(
      map((response: Principal) => {
        const principal = response;
        if (principal) {
          localStorage.setItem('principal', JSON.stringify(principal))
          this.currentAdminSource.next(principal);
        }
      })
    )

  }

  interviewerlogin(models: any) {
    return this.http.post<Interviewer>(this.baseUrl + 'account/interviewerlogin', models).pipe(
      map((response: Interviewer) => {
        const interviewer = response;
        if (interviewer) {
          localStorage.setItem('interviewer', JSON.stringify(interviewer))
          this.currentInterviewerSource.next(interviewer);
        }
      })
    )

  }
  officelogin(models: any) {
    return this.http.post<Office>(this.baseUrl + 'account/officelogin', models).pipe(
      map((response: Office) => {
        const office = response;
        if (office) {
          localStorage.setItem('office', JSON.stringify(office))
          this.currentOfficeSource.next(office);
        }
      })
    )

  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);


  }

  setCurrentPrincipal(principal: Principal) {
    this.currentAdminSource.next(principal);


  }
  setCurrentInterviewer(interviewer: Interviewer) {
    this.currentInterviewerSource.next(interviewer);


  }
  setCurrentOffice(office: Office) {
    this.currentOfficeSource.next(office);


  }
  insertstudentdata(data: any) {
    this.http.post("http://localhost:5001/api/account/register",
      data).toPromise().then(result => { console.log(result); })
  }

  insertinterviewerdata(data: any) {
    this.http.post("http://localhost:5001/api/account/interviewerreg",
      data).toPromise().then(result => { console.log(result); })
  }
  insertofficedata(data: any) {
    this.http.post("http://localhost:5001/api/account/officereg",
      data).toPromise().then(result => { console.log(result); })
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }
  logoutprinci() {
    localStorage.removeItem('principal');
    this.currentAdminSource.next(null);

  }
  logoutinterviewer() {
    localStorage.removeItem('interviewer');
    this.currentInterviewerSource.next(null);

  }
  logoutoffice() {
    localStorage.removeItem('office');
    this.currentOfficeSource.next(null);

  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/account/getusers")
  }
  getInterviewers(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/account/getinterviewers")
  }


  getOffice(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/account/getoffice")
  }

  getUserInfo(Id: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/account/getuser/" + Id)
  }

  getPersonalInfo(pid: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getpersonalinfoall/" + pid)
  }
  getPersonalInfo2(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/viewpersonalinfo")
  }

  deleteInterviewer(intID: number): Observable<null> {
    return this.http.delete<any>("http://localhost:5001/api/account/interviewerdelete/" + intID);
  }
  deleteOffice(intID: number): Observable<null> {
    return this.http.delete<any>("http://localhost:5001/api/account/officedel/" + intID);
  }


  newlogout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }
}
