import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Interviewer } from './../../_models/Interviewer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviewerview',
  templateUrl: './interviewerview.component.html',
  styleUrls: ['./interviewerview.component.scss']
})
export class InterviewerviewComponent implements OnInit {

  interviewer: Interviewer[] = [];

  constructor(public accountService: AccountServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadInterviewers();


  }

  loadInterviewers() {
    this.accountService.getInterviewers().subscribe({
      next: interviewer => this.interviewer = interviewer
    })
    console.log(this.interviewer)

  }

  onRowDelete(interviewerID: number) {
    this.accountService.deleteInterviewer(interviewerID)
    .subscribe(res => {
      this.toastr.success("Successfully deleted district!")
        console.log(res);
        
    }, (err) => {
        console.log(err);
    });
  }

}
