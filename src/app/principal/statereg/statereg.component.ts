import { AccountServiceService } from './../../_services/account-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocationService } from 'src/app/_services/location.service';

@Component({
  selector: 'app-statereg',
  templateUrl: './statereg.component.html',
  styleUrls: ['./statereg.component.scss']
})
export class StateregComponent implements OnInit {

  constructor(private fb: FormBuilder, private backendservice: LocationService, public accountService:AccountServiceService) { }
  StateRegisterForm = this.fb.group({
    StateName: [''],
    

    })
    OnSubmit() {
      this.backendservice.insertstatedata(this.StateRegisterForm.value)
    }
  ngOnInit(): void {
  }

}
