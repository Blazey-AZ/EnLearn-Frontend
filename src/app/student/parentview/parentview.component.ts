import { ParentService } from 'src/app/_services/parent.service';
import { Parent } from './../../_models/parent';
import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { ActivatedRoute } from '@angular/router';
import { PersonaldetailsService } from 'src/app/_services/personaldetails.service';

@Component({
  selector: 'app-parentview',
  templateUrl: './parentview.component.html',
  styleUrls: ['./parentview.component.scss']
})
export class ParentviewComponent implements OnInit {

  parentdetails: Parent[] = [];
  Id: string | undefined | null;
  studentid: string;

  constructor(public accountService: AccountServiceService, private route: ActivatedRoute, private personaldetailService: PersonaldetailsService, private parentService: ParentService) {
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
    this.parentService.getParentinfo().subscribe({
      next: parentdetails => this.parentdetails = parentdetails.filter(x => x.studentID == this.studentid)
    })
  }
}
