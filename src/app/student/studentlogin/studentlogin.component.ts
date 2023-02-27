import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {

  model: any = {}
  loggedIn = false;

  constructor(private accountService: AccountServiceService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    })
  }

  login() {
    this.accountService.login(this.model).subscribe(
      {
        next: response => {
          
          console.log(response);
          this.loggedIn = true;
          this.router.navigateByUrl('/userhome')
          
        },
        error: error => this.toastr.error("Enter correct username/password")
      })
  }
  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }
}
