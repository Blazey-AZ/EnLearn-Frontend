import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-principallogin',
  templateUrl: './principallogin.component.html',
  styleUrls: ['./principallogin.component.scss']
})
export class PrincipalloginComponent implements OnInit {

  model: any={}
  loggedIn = false;

  constructor(private accountService: AccountServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentPrincipal(); 
  }

  getCurrentPrincipal(){
    this.accountService.currentUser$.subscribe({
      next: principal => this.loggedIn = !!principal,
      error: error => console.log(error) 
    })
  } 

  login()
  {
    this.accountService.principallogin(this.model).subscribe(
    {
      next: response => {

        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.log()
    })
  }
  logout()
  {
    this.accountService.logoutprinci();
    this.loggedIn = false;
  }

}
