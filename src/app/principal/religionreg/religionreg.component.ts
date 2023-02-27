import { FormBuilder } from '@angular/forms';
import { AccountServiceService } from './../../_services/account-service.service';
import { FaithService } from './../../_services/faith.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-religionreg',
  templateUrl: './religionreg.component.html',
  styleUrls: ['./religionreg.component.scss']
})
export class ReligionregComponent implements OnInit {

  constructor(private fb: FormBuilder, private faithService: FaithService , public accountService:AccountServiceService) { }
  ReligionRegForm = this.fb.group({
    ReligionName: [''],
    

    })
    OnSubmit() {
      this.faithService.insertreligion(this.ReligionRegForm.value)
    }
  ngOnInit(): void {
  }

}
