import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interviewerlogin',
  templateUrl: './interviewerlogin.component.html',
  styleUrls: ['./interviewerlogin.component.scss']
})
export class InterviewerloginComponent implements OnInit {

  model: any = {}
  loggedIn = false;

  constructor(private accountService: AccountServiceService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.accountService.currentInterviewer$.subscribe({
      next: interviewer => this.loggedIn = !!interviewer,
      error: error => console.log(error)
    })
  }

  login() {
    this.accountService.interviewerlogin(this.model).subscribe(
      {
        next: response => {
          
          console.log(response);
          this.loggedIn = true;
          this.router.navigateByUrl('/interviewerhome')
          
        },
        error: error => this.toastr.error(error.error)
      })
  }
  logout() {
    this.accountService.logoutinterviewer();
    this.loggedIn = false;
  }

}
