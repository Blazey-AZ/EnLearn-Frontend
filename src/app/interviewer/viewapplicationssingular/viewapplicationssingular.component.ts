import { AccountServiceService } from 'src/app/_services/account-service.service';
import { ActivatedRoute } from '@angular/router';
import { InterviewerService } from './../../_services/interviewer.service';
import { Application } from './../../_models/application';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewapplicationssingular',
  templateUrl: './viewapplicationssingular.component.html',
  styleUrls: ['./viewapplicationssingular.component.scss']
})
export class ViewapplicationssingularComponent implements OnInit {

  Id: string | undefined | null;
  applications: Application[] = [];


  constructor(private interviewerService: InterviewerService, private route: ActivatedRoute, public accountService:AccountServiceService) {
    this.Id = this.route.snapshot.paramMap.get("id");

  }
  ngOnInit(): void {
    this.loadApplication();
  }



  loadApplication() {
    if (this.Id) {
      this.interviewerService.getApplicationDataSingular(this.Id).subscribe({
        next: applications => this.applications = applications
      })
    }

  }
  pass(ID: number) {
    this.interviewerService.pass(ID)
  }

  fail(ID: number) {
    this.interviewerService.fail(ID)
  }
}
