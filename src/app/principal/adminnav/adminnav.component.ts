import {  Router } from '@angular/router';
import { AccountServiceService } from './../../_services/account-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss']
})
export class AdminnavComponent implements OnInit {

  model: any={};
  constructor(public accountService: AccountServiceService, private router: Router ) { }

  ngOnInit(): void {
  }

  logout()
    {
      this.accountService.logoutprinci();
      this.router.navigateByUrl('/guesthome');
    }
//    

}
