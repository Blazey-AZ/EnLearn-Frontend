import { Course } from 'src/app/_models/course';
import { CourseService } from './../../_services/course.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-courseedit',
  templateUrl: './courseedit.component.html',
  styleUrls: ['./courseedit.component.scss']
})
export class CourseeditComponent implements OnInit {

  courses: Course[] = [];
  

  clonedProducts: { [s: string]: Course; } = {};
  localCache = new Map<number, Course>();


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: courses => this.courses = courses
    })
  }

  onRowEditInit(course: Course) {
    this.localCache.set(course.courseid, Object.assign({}, course));
  }


  onRowEditCancel(item: any, suii: any) {

    throw new Error('Method not implemented.');
  }



  onRowEditSave(course: Course) {
    if (this.validateString(course.coursename) && this.validateString(course.coursedescription)) {
      this.courseService.updateCourse(course).subscribe({
        next: value => {
          this.localCache.delete(course.courseid);
        },
        error: err => {
          console.log(err);
        },
      })
    } 
  }

  private validateString(strin: string): boolean {
    return strin.length > 0
  }
  // loadCourse(){
  //   this.courseService.getCourse().subscribe({
  //     next: courses => this.courses = courses 
  //   })
  // }
}
