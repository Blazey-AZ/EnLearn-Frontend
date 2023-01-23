import { RouterModule } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CourseService } from 'src/app/_services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';



@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.component.html',
  styleUrls: ['./courseview.component.scss']
})
export class CourseviewComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService, private router: RouterModule) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: courses => this.courses = courses
    })

  }

  onRowDelete(courseID: number) {
    this.courseService.deleteCourse(courseID)
    .subscribe(res => {
        console.log(res);
        
    }, (err) => {
        console.log(err);
    });
  }
  }
  

  // loadCourse(){
  //   this.courseService.getCourse().subscribe({
  //     next: courses => this.courses = courses 
  //   })
  // }


