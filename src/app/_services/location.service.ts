import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../_models/state';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  insertstatedata(data: any) {
    this.http.post("http://localhost:5001/api/location/statereg",
      data).subscribe({
        next: () => {
        console.log(data),
        this.toastr.success("Success");
        },
        error: error => this.toastr.error("Error!")
        })
  }

  getstatedata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/location/getstate")
  }
  getdistrict() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/location/getdistrict")
  }

  insertdistrictdata(data: any) {
    console.log(data);
    this.http.post("http://localhost:5001/api/location/districtreg",
      data).subscribe({
        next: () => {
        console.log(data),
        this.toastr.success("Success");
        },
        error: error => this.toastr.error("Error!")
        })
  }
  deleteState(stID: number): Observable<null>{
    return this.http.delete<any>("http://localhost:5001/api/location/statedelete/"+stID);
  }
  deleteDistrict(dtID: number): Observable<null>{
    return this.http.delete<any>("http://localhost:5001/api/location/districtdelete/"+dtID);
  }
  updateState(st: State): Observable<null>{
    return this.http.post<any>("http://localhost:5001/api/location/editstate/", st);
  } 
}
