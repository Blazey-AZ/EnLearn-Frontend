import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.scss']
})
export class StudentregisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private backendservice: AccountServiceService) { }
  CourseRegisterForm = this.fb.group({
    StudentName: [''],
    ContactNumber: [''],
    Gender: [''],
    UserName: [''],
    Password: [''],
    ParentContact: [''],
    ApplicationStatus: [''],
    ApplicationNo: [''],
    TempStatus: [''],
    ApprovedCourse: [''],

    })
    OnSubmit() {
      this.backendservice.insertstudentdata(this.CourseRegisterForm.value)
    }

  ngOnInit(): void {
  }

}
