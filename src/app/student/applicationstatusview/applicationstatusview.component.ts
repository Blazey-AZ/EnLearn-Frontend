import { ApplicationService } from './../../_services/application.service';
import { Application } from './../../_models/application';
import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { ActivatedRoute } from '@angular/router';
import { PersonaldetailsService } from 'src/app/_services/personaldetails.service';

@Component({
  selector: 'app-applicationstatusview',
  templateUrl: './applicationstatusview.component.html',
  styleUrls: ['./applicationstatusview.component.scss']
})
export class ApplicationstatusviewComponent implements OnInit {

  applicationdetails: Application[] = [];
  Id: string | undefined | null;
  studentid: string;

  constructor(private applicationService: ApplicationService, public accountService: AccountServiceService, private route: ActivatedRoute, private personaldetailService: PersonaldetailsService) {
    this.Id = this.route.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
    var temp = localStorage.getItem('user')

    if(temp == null)
    return;
    var tempJson = JSON.parse(temp)
    if(tempJson== null)
    return;
    this.studentid = tempJson.studentID
    
    console.log(this.studentid)
    this.loadStudent();
  }




  loadStudent() {
    this.applicationService.getAppStatusInfo().subscribe({
      next: applicationdetails => this.applicationdetails = applicationdetails.filter(x => x.studentID == this.studentid)
    })
  }
}
