import { AccountServiceService } from './../../_services/account-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-districtreg',
  templateUrl: './districtreg.component.html',
  styleUrls: ['./districtreg.component.scss']
})
export class DistrictregComponent implements OnInit {
  data: string[] = [];

  constructor(private fb: FormBuilder, private backendservice: LocationService, public accountService:AccountServiceService) {

   }
  DistrictRegisterForm = this.fb.group({
    DistrictName: [''],
    StateName: ['']
    

    })
    OnSubmit() {
      this.backendservice.insertdistrictdata(this.DistrictRegisterForm.value)
    }

    onMe(){
      this.backendservice.getstatedata().subscribe(
        {
          next: val => {
            val.forEach(state => {
              this.data.push(state.stateName);
            })
          },
          error: err => {

          },
          complete: () => {

          }
        }
      )
    }
    
  ngOnInit(): void {
      this.onMe();
    }
  }


