import { PersonalDetails } from './../../_models/personaldetails';
import { Student } from './../../_models/student';
import { AccountServiceService } from './../../_services/account-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-personaldetailview',
  templateUrl: './personaldetailview.component.html',
  styleUrls: ['./personaldetailview.component.scss']
})
export class PersonaldetailviewComponent implements OnInit {
  Id:string|undefined|null;
  users: PersonalDetails[] = [];


  constructor(public accountService: AccountServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadStudent();
    this.loadInfo();
  }

  loadStudent(){
    this.route.paramMap.subscribe(
      (params) => {
        this.Id = params.get("id");
        if(this.Id){
          this.accountService.getUserInfo(this.Id).
          subscribe((userData)=> {
            console.log(userData);
          })
        }

      }
    )

  }
  loadInfo() {
    if(this.Id){
      this.accountService.getPersonalInfo(this.Id).subscribe({
        next: users => this.users = users
      })
    }
    

  }

}
