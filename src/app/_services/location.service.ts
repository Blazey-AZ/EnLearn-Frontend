import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  insertstatedata(data: any) {
    this.http.post("http://localhost:5001/api/location/statereg",
      data).toPromise().then(result => { console.log(result); })
  }

  getstatedata() : Observable<any[]> {
    return this.http.get<any[]>("http://localhost:5001/api/location/getstate")
  }

  insertdistrictdata(data: any) {
    console.log(data);
    this.http.post("http://localhost:5001/api/location/districtreg",
      data).subscribe();
  }
}
