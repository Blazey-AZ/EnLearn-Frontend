import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { ApplicationService } from './../../_services/application.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicationreg',
  templateUrl: './applicationreg.component.html',
  styleUrls: ['./applicationreg.component.scss']
})
export class ApplicationregComponent implements OnInit {
  data: string[] = [];
  submitted = false;

  public ApplicationRegForm: FormGroup;

  constructor(private fb: FormBuilder, private applicationService: ApplicationService, public accountService: AccountServiceService, private toastr: ToastrService) {
    var userJSON = localStorage.getItem('user')
    if (userJSON == null)

      return;
    var user = JSON.parse(userJSON);

    this.ApplicationRegForm = this.fb.group({
      StudentID: [user.studentID],
      FirstOption: [''],
      SecondOption: [''],
      ThirdOption: [''],
      TenthBoard: ['', Validators.required],
      TenthInstitution: ['', Validators.required],
      TenthPlace: ['', Validators.required],
      TenthState: ['', Validators.required],
      TenthYear: ['', Validators.required],
      TenthMark: ['', Validators.required, Validators.minLength(30), Validators.maxLength(100)],
      TenthNoOfAttempts: ['', Validators.required],
      TwelfthBoard: ['', Validators.required],
      TwelfthInstitution: ['', Validators.required],
      TwelfthPlace: ['', Validators.required],
      TwelfthState: ['', Validators.required],
      TwelfthYear: ['', Validators.required],
      TwelfthMark: ['', Validators.required, Validators.minLength(30), Validators.maxLength(100)],
      TwelfthNoOfAttempts: ['', Validators.required],

    })
  }

  onMe() {
    this.applicationService.getcoursedata().subscribe(
      {
        next: val => {
          val.forEach(course => {
            this.data.push(course.courseShortName);
          })
        },
        error: err => {

        },
        complete: () => {

        }
      }
    )
  }
  OnSubmit() {
    this.applicationService.insertapplicationreg(this.ApplicationRegForm.value)
  }



  ngOnInit(): void {
    this.onMe();
  }
}




