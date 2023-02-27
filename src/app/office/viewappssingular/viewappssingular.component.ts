import { OfficeService } from './../../_services/office.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Application } from 'src/app/_models/application';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { InterviewerService } from 'src/app/_services/interviewer.service';

@Component({
  selector: 'app-viewappssingular',
  templateUrl: './viewappssingular.component.html',
  styleUrls: ['./viewappssingular.component.scss']
})
export class ViewappssingularComponent implements OnInit {

  Id: string | undefined | null;
  applications: Application[] = [];


  constructor(private officeService: OfficeService, private route: ActivatedRoute, public accountService:AccountServiceService) {
    this.Id = this.route.snapshot.paramMap.get("id");

  }
  ngOnInit(): void {
    this.loadApplication();
  }



  loadApplication() {
    if (this.Id) {
      this.officeService.getApplicationDataSingular(this.Id).subscribe({
        next: applications => this.applications = applications
      })
    }

  }
  enroll(ID: number) {
    this.officeService.enroll(ID)
    // this.officeService.email()
  }

  reject(ID: number) {
    this.officeService.reject(ID)
  }
}
