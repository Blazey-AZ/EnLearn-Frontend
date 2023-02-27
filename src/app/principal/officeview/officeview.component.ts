import { Office } from './../../_models/office';
import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-officeview',
  templateUrl: './officeview.component.html',
  styleUrls: ['./officeview.component.scss']
})
export class OfficeviewComponent implements OnInit {

  office: Office[] = [];

  constructor(public accountService: AccountServiceService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadOffice();


  }

  loadOffice() {
    this.accountService.getOffice().subscribe({
      next: office => this.office = office
    })
    console.log(this.office)

  }

  onRowDelete(officeID: number) {
    this.accountService.deleteOffice(officeID)
    .subscribe(res => {
        console.log(res);
        
    }, (err) => {
        console.log(err);
    });
  }

}
