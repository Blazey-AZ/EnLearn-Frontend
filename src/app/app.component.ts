import { Component, OnInit } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Principal } from './_models/principal';
import { User } from './_models/user';
import { AccountServiceService } from './_services/account-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  users: any;
  /**
   *
   */
  constructor(private accountService: AccountServiceService, private spinner : NgxSpinnerService) { }
  ngOnInit(): void {
    this.setCurrentUser();
    this.setCurrentPrincipal();
    this.spinner.show().then(()=> {
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
    })
  }

  setCurrentUser() {
    const userString = (localStorage.getItem('user'));
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);

  }
  setCurrentPrincipal() {
    const userString = (localStorage.getItem('principal'));
    if (!userString) return;
    const principal: Principal = JSON.parse(userString);
    this.accountService.setCurrentPrincipal(principal);

  }

}

