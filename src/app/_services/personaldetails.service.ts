import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaldetailsService {

  constructor(private http: HttpClient) { }

  

  insertpersonalinfo(data: any) {
    console.log(data);
    this.http.post("http://localhost:5001/api/personaldetail/register",
      data).subscribe();
  }
  getreligiondata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getreligion")
  }
  getcastedata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getcaste")
  }
  getstatedata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getstate")
  }

  getdistrictdata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getdistrict")
  }
  getcastename(rn: string) : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getreligionbyname/"+rn)
  }
  getdistrictname(sn: string) : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getstatebyname/"+sn)
  }
  uploadImage() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/upload")
  }

  getPersonalInfo(pid: number): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/PersonalDetail/getpersonalinfoall/" + pid)
  }


}