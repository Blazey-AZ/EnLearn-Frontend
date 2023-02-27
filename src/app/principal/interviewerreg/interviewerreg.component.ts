import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewerreg',
  templateUrl: './interviewerreg.component.html',
  styleUrls: ['./interviewerreg.component.scss']
})
export class InterviewerregComponent implements OnInit {

  data: string[] = [];

  constructor(private fb: FormBuilder, public accountService: AccountServiceService, public toastr:ToastrService) {

   }
  InterviewerRegForm = this.fb.group({
    InterviewerName: [''],
    Department: [''],
    Contact: [''],
    Email: [''],
    Username: [''],
    Password: [''],


    })
    OnSubmit() {
      this.accountService.insertinterviewerdata(this.InterviewerRegForm.value)
    }

   
    
  ngOnInit(): void {
    }
}
