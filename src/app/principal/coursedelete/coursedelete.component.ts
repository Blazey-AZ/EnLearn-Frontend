import { ConfirmationService } from 'primeng/api';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursedelete',
  templateUrl: './coursedelete.component.html',
  styleUrls: ['./coursedelete.component.scss']
})
export class CoursedeleteComponent implements OnInit {
  localCache = new Map<number, Course>();
  courses: Course[] = [];

  constructor(private courseService:CourseService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.loadCourses();
  }
  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: courses => this.courses = courses
    })
  }





  onRowDelete(course: Course){
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete the course ${course.coursename} [${course.courseid}]?`,
      accept: () => {
        this.courseService.deleteCourse(course.courseid).subscribe({
          // next: value => {
          // },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => {

          }
        })
      }
    });
  }

  private validateString(strin: string): boolean {
    return strin.length > 0
  }
}
