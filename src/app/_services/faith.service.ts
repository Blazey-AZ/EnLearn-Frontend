import { Caste } from './../_models/caste';
import { Religion } from './../_models/religion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaithService {

  constructor(private http: HttpClient) { }
  insertreligion(data: any) {
    this.http.post("http://localhost:5001/api/faith/religionreg",
      data).toPromise().then(result => { console.log(result); })
  }

  getreligiondata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/faith/getreligion")
  }
  getcastedata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/faith/getcaste")
  }

  insertcaste(data: any) {
    console.log(data);
    this.http.post("http://localhost:5001/api/faith/castereg",
      data).subscribe();
  }
  deleteCaste(casteID: number): Observable<null>{
    return this.http.delete<any>("http://localhost:5001/api/faith/getcastedelete/"+casteID);
  }

  deleteRel(relID: number): Observable<null>{
    return this.http.delete<any>("http://localhost:5001/api/faith/getreligiondelete/"+relID);
  }
  updateRel(rel: Religion): Observable<null>{
    return this.http.post<any>("http://localhost:5001/api/faith/editreligion/", rel);
  } 
  
}
