import { Application } from './../../_models/application';
import { Component, OnInit } from '@angular/core';
import { InterviewerService } from 'src/app/_services/interviewer.service';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-viewapps',
  templateUrl: './viewapps.component.html',
  styleUrls: ['./viewapps.component.scss']
})
export class ViewappsComponent implements OnInit {

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
