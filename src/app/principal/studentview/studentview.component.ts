import { Student } from './../../_models/student';
import { User } from './../../_models/user';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.scss']
})
export class StudentviewComponent implements OnInit {
  users: Student[] = [];


  constructor(public accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.accountService.getUsers().subscribe({
      next: users => this.users = users
    })

  }

  



}
