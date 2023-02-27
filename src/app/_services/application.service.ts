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
