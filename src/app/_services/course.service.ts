import { ToastrService } from 'ngx-toastr';
import { Course } from './../_models/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:5001/api/';


  constructor(private http: HttpClient, private toastr: ToastrService) { }


  insertcoursedata(data: any) {
    this.http.post("http://localhost:5001/api/course/coursereg",
      data).subscribe({
        next: () => {
        console.log(data),
        this.toastr.success("success");
        },
        error: error => this.toastr.error("Error!")
        })
  }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+"Course/getcourse")
  }
  getCourse(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl+"course/getcourse/{id}")
  }
  updateCourse(suii: Course): Observable<null>{
    return this.http.post<any>(this.baseUrl+"course/editcourse/", suii);
  } 

  
   deleteCourse(courseID: number): Observable<null>{
    return this.http.delete<any>(this.baseUrl+"course/coursedelete/"+courseID);
  }
}
