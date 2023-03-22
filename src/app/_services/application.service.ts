import { Application } from 'src/app/_models/application';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

    insertapplicationreg(data: any) {   
      this.http.post("http://localhost:5001/api/application/register", data).subscribe({
      next: () => {
      console.log(data),
      this.toastr.success("success");
      },
      error: error => this.toastr.error("Error!")
      })

  }
  getcoursedata(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/getcourse")
  }
  getapplicationdata(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/viewapplicationinfos")
  }
  getAppInfo(Id: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/getapp/" + Id)
  }
  getEnrollStatus(): Observable<Application[]> {
    return this.http.get<Application[]>("http://localhost:5001/api/application/enrollreport")
  }
  getRejectStatus(): Observable<Application[]> {
    return this.http.get<Application[]>("http://localhost:5001/api/application/rejectreport")
  }
  getPassStatus(): Observable<Application[]> {
    return this.http.get<Application[]>("http://localhost:5001/api/application/passreport")
  }
  getFailStatus(): Observable<Application[]> {
    return this.http.get<Application[]>("http://localhost:5001/api/application/failreport")
  }
  getVerifyStatus(): Observable<Application[]> {
    return this.http.get<Application[]>("http://localhost:5001/api/application/verifyreport")
  }
  getUnverifyStatus(): Observable<Application[]> {
    return this.http.get<Application[]>("http://localhost:5001/api/application/unverifyreport")
  }


  getApplicationDataSingular(aid: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/viewapplicationinfo/" + aid)
  }
  verify(eid: number) {
     this.http.post<any[]>("http://localhost:5001/api/application/verify/"+eid,eid).subscribe();
  }
  unverify(rid: number) {
     this.http.post<any[]>("http://localhost:5001/api/application/unverified/"+rid,rid).subscribe();
  }
  getAppStatusInfo(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/viewappinfo")
  }




}
