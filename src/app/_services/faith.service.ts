import { Caste } from './../_models/caste';
import { Religion } from './../_models/religion';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FaithService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  insertreligion(data: any) {
    this.http.post("http://localhost:5001/api/faith/religionreg",
      data).subscribe({
        next: () => {
        console.log(data),
        this.toastr.success("success");
        },
        error: error => this.toastr.error("Error!")
        })
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
      data).subscribe({
        next: () => {
        console.log(data),
        this.toastr.success("success");
        },
        error: error => this.toastr.error("Error!")
        })
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
