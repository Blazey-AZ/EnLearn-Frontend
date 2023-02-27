import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';

@Component({
  selector: 'app-officereg',
  templateUrl: './officereg.component.html',
  styleUrls: ['./officereg.component.scss']
})
export class OfficeregComponent implements OnInit {

  data: string[] = [];

  constructor(private fb: FormBuilder, public accountService: AccountServiceService, public toastr:ToastrService) {

   }
  OfficeRegForm = this.fb.group({
    StaffInCharge: [''],
    Username: [''],
    Password: [''],


    })
    OnSubmit() {
      this.accountService.insertofficedata(this.OfficeRegForm.value)
    }

   
    
  ngOnInit(): void {
    }
}
