import { InterviewerService } from './../../_services/interviewer.service';
import { ActivatedRoute } from '@angular/router';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Application } from './../../_models/application';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewapplications',
  templateUrl: './viewapplications.component.html',
  styleUrls: ['./viewapplications.component.scss']
})
export class ViewapplicationsComponent implements OnInit {

  applications: Application[] = [];


  constructor(private interviewerService: InterviewerService, public accountService:AccountServiceService) {

  }
  ngOnInit(): void {
    this.loadApplications();
  }



  loadApplications() {
    this.interviewerService.getapplicationdata().subscribe({
      next: applications => this.applications = applications
    })

}
}
