import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/_models/application';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { ApplicationService } from 'src/app/_services/application.service';

@Component({
  selector: 'app-reportreject',
  templateUrl: './reportreject.component.html',
  styleUrls: ['./reportreject.component.scss']
})
export class ReportrejectComponent implements OnInit {

  applications: Application[] = [];

  constructor(private applicationService: ApplicationService, public accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationService.getRejectStatus().subscribe({
      next: applications => this.applications = applications
    })

}
}
