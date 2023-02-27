import { AccountServiceService } from './../../_services/account-service.service';
import { ActivatedRoute } from '@angular/router';
import { Application } from './../../_models/application';
import { ApplicationService } from './../../_services/application.service';
import { Component, OnInit } from '@angular/core';
import { __param } from 'tslib';


@Component({
  selector: 'app-applicationviewsingular',
  templateUrl: './applicationviewsingular.component.html',
  styleUrls: ['./applicationviewsingular.component.scss']
})
export class ApplicationviewsingularComponent implements OnInit {
  Id: string | undefined | null;
  applications: Application[] = [];


  constructor(private applicationService: ApplicationService, private route: ActivatedRoute, public accountService:AccountServiceService) {
    this.Id = this.route.snapshot.paramMap.get("id");

  }
  ngOnInit(): void {
    this.loadApplication();
  }



  loadApplication() {
    if (this.Id) {
      this.applicationService.getApplicationDataSingular(this.Id).subscribe({
        next: applications => this.applications = applications
      })
    }

  }
  verify(ID: number) {
    this.applicationService.verify(ID)
  }

  unverify(ID: number) {
    this.applicationService.unverify(ID)
  }
}
