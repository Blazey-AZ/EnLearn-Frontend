import { PersonalDetails } from './../../_models/personaldetails';
import { ActivatedRoute } from '@angular/router';
import { Student } from './../../_models/student';
import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { PersonaldetailsService } from 'src/app/_services/personaldetails.service';

@Component({
  selector: 'app-personaldetailedit',
  templateUrl: './personaldetailedit.component.html',
  styleUrls: ['./personaldetailedit.component.scss']
})
export class PersonaldetaileditComponent implements OnInit {

  personaldetails: PersonalDetails[] = [];
  Id: string | undefined | null;
  studentid: string;

  constructor(public accountService: AccountServiceService, private route: ActivatedRoute, private personaldetailService: PersonaldetailsService) {
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
    this.accountService.getPersonalInfo2().subscribe({
      next: personaldetails => this.personaldetails = personaldetails.filter(x => x.studentID == this.studentid)
    })
  }

}

