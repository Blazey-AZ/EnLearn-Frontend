import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

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
  pass(eid: number) {
     this.http.post<any[]>("http://localhost:5001/api/interviewer/passed/"+eid,eid).subscribe();
  }
  fail(rid: number) {
     this.http.post<any[]>("http://localhost:5001/api/interviewer/failed/"+rid,rid).subscribe();
  }
}
