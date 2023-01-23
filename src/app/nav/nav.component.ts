import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../_services/account-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model : any={};

  constructor(public accountService: AccountServiceService) { }

  ngOnInit(): void {
  }
  login()
  {
    this.accountService.login(this.model).subscribe(
    {
      next: response => {
        console.log(response);
      
      },
      error: error => console.log(error)
    })
  }
  
  logout()
  {
    this.accountService.logout();
  }

}


