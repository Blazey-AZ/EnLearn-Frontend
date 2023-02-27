import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-officelogin',
  templateUrl: './officelogin.component.html',
  styleUrls: ['./officelogin.component.scss']
})
export class OfficeloginComponent implements OnInit {
  model: any = {}
  loggedIn = false;

  constructor(private accountService: AccountServiceService,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.accountService.currentOffice$.subscribe({
      next: office => this.loggedIn = !!office,
      error: error => console.log(error)
    })
  }

  login() {
    this.accountService.officelogin(this.model).subscribe(
      {
        next: response => {
          
          console.log(response);
          this.loggedIn = true;
          this.router.navigateByUrl('/officehome')
          
        },
        error: error => this.toastr.error(error.error)
      })
  }
  logout() {
    this.accountService.logoutoffice();
    this.loggedIn = false;
  }
}
