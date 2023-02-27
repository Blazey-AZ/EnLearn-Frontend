import { AccountServiceService } from 'src/app/_services/account-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Student } from './../../_models/student';
import { PersonaldetailsService } from './../../_services/personaldetails.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  public response: { dbPath: string }
  public message: string;
  public progress: number;
  @Output() public onUploadFinished = new EventEmitter();


  student: Student[] = [];
  public PersonalInfoRegForm: FormGroup;


  constructor(private fb: FormBuilder, private personaldetailService: PersonaldetailsService, private http: HttpClient, public accountService: AccountServiceService) {
    var userJSON = localStorage.getItem('user')
    if (userJSON == null)

      return;
    var user = JSON.parse(userJSON);
    console.log(this.response)
    this.PersonalInfoRegForm = this.fb.group({
      StudentID: [user.studentID],
      StudentName: [''],

      Image: [null],
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

  religionChanged() {
    var religion = this.PersonalInfoRegForm.get('ReligionName')?.value;

    this.PersonalInfoRegForm.get('ReligionName')?.value;
    this.personaldetailService.getcastename(religion).subscribe(
      {
        next: val => {
          this.data2 = val

        },

        error: err => {

        },
        complete: () => {

        }
      }
    )

  }


  stateChanged() {
    var state = this.PersonalInfoRegForm.get('StateName')?.value;

    this.PersonalInfoRegForm.get('StateName')?.value;
    this.personaldetailService.getdistrictname(state).subscribe(
      {
        next: val => {
          this.data4 = val

        },

        error: err => {

        },
        complete: () => {

        }
      }
    )

  }

  public uploadFile = (files: any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('http://localhost:5001/api/PersonalDetail/uploadimage', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
       
         if (event.type === HttpEventType.Response) {
          this.message = 'Upload Success.';
          console.log(event.body)
          this.response = (<{ dbPath: string }>event.body)
          this.PersonalInfoRegForm.patchValue({ 'Image': this.response.dbPath })
          console.log(this.PersonalInfoRegForm.value)
          this.onUploadFinished.emit(event.body);
        }
      });
  }

  public uploadFinished = (event: any) => {
    this.response = event;
    console.log(event)

  }



  ngOnInit(): void {
    this.onMe();
    this.onMe3();



  }






}
