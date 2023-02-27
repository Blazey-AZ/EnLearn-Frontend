import { AccountServiceService } from './../../_services/account-service.service';
import { FaithService } from './../../_services/faith.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-castereg',
  templateUrl: './castereg.component.html',
  styleUrls: ['./castereg.component.scss']
})
export class CasteregComponent implements OnInit {

  data: string[] = [];

  constructor(private fb: FormBuilder, private faithService: FaithService, public accountService:AccountServiceService) {

   }
  CasteRegForm = this.fb.group({
    CasteName: [''],
    ReligionName: ['']
    

    })
    OnSubmit() {
      this.faithService.insertcaste(this.CasteRegForm.value)
    }

    onMe(){
      this.faithService.getreligiondata().subscribe(
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
    
  ngOnInit(): void {
      this.onMe();
    }

}
