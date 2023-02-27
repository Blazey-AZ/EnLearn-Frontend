import { ApplicationService } from './../../_services/application.service';
import { Application } from './../../_models/application';
import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-applicationsview',
  templateUrl: './applicationsview.component.html',
  styleUrls: ['./applicationsview.component.scss']
})
export class ApplicationsviewComponent implements OnInit {
  applications: Application[] = [];

  constructor(private applicationService: ApplicationService, public accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationService.getapplicationdata().subscribe({
      next: applications => this.applications = applications
    })

}
}