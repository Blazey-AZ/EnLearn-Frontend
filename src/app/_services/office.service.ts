import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) { }
  getapplicationdata(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/viewapplicationinfos")
  }
  getAppInfo(Id: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/getapp/" + Id)
  }

  getApplicationDataSingular(aid: string): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/application/viewapplicationinfo/" + aid)
  }
  enroll(eid: number) {
     this.http.post<any[]>("http://localhost:5001/api/office/enroll/"+eid,eid).subscribe();
  }
  reject(rid: number) {
     this.http.post<any[]>("http://localhost:5001/api/office/reject/"+rid,rid).subscribe();
  }
  // email(): Observable<any[]> {
  //   return this.http.get<any[]>("http://localhost:5001/api/account/email")
  // }

}
