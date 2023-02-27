import { AccountServiceService } from './../../_services/account-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-coursereg',
  templateUrl: './coursereg.component.html',
  styleUrls: ['./coursereg.component.scss']
})
export class CourseregComponent implements OnInit {

  constructor(private fb: FormBuilder, private backendservice: CourseService, public accountService: AccountServiceService) { }
  CourseRegisterForm = this.fb.group({
    CourseName: [''],
    CourseShortName: [''],
    CourseType: [''],
    CourseDescription: [''],

    })
    OnSubmit() {
      this.backendservice.insertcoursedata(this.CourseRegisterForm.value)
    }
  ngOnInit(): void {
  }

}
