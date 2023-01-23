import { Student } from './../../_models/student';
import { PersonaldetailsService } from './../../_services/personaldetails.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent implements OnInit {
  data: string[] = [];
  data2: string[] = [];
  data3: string[] = [];
  data4: string[] = [];


  student: Student [] = [];
  public PersonalInfoRegForm: FormGroup;


  constructor(private fb: FormBuilder, private personaldetailService: PersonaldetailsService) {
    var userJSON = localStorage.getItem('user')
    if (userJSON == null)

      return;
    var user = JSON.parse(userJSON);

    this.PersonalInfoRegForm = this.fb.group({
      StudentID: [user.studentID],
      StudentName: [''],
      Image: [''],
      NameOfFather: [''],
      DateOfBirth: [''],
      Nationality: [''],
      AnnualIncome: [''],
      ReligionName: [''],
      CasteName: [''],
      StateName: [''],
      DistrictName: [''],
      HouseName: [''],
      Place: [''],
      Pincode: [''],
      Email: [''],

    })
  }




  onMe() {
    this.personaldetailService.getreligiondata().subscribe(
      {
        next: val => {
          val.forEach(religion => {
            this.data.push(religion.religionName);
          })
        },
        error: err => {

        },
        complete: () => {

        }
      }
    )
  }

  onMe2() {
    this.personaldetailService.getcastedata().subscribe(
      {
        next: val => {
          val.forEach(caste => {
            this.data2.push(caste.casteName);
          })
        },
        error: err => {

        },
        complete: () => {

        }
      }
    )
  }

  onMe3() {
    this.personaldetailService.getstatedata().subscribe(
      {
        next: val => {
          val.forEach(state => {
            this.data3.push(state.stateName);
          })
        },
        error: err => {

        },
        complete: () => {

        }
      }
    )
  } 


  onMe4() {
    this.personaldetailService.getdistrictdata().subscribe(
      {
        next: val => {
          val.forEach(district => {
            this.data4.push(district.districtName);
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
    this.personaldetailService.insertpersonalinfo(this.PersonalInfoRegForm.value)
  }


  ngOnInit(): void {
    this.onMe();
    this.onMe2();
    this.onMe3();
    this.onMe4();

  }



}
