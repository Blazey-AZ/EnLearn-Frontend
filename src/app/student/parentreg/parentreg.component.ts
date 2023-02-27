import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParentService } from 'src/app/_services/parent.service';

@Component({
  selector: 'app-parentreg',
  templateUrl: './parentreg.component.html',
  styleUrls: ['./parentreg.component.scss']
})
export class ParentregComponent implements OnInit {

  public ParentRegForm: FormGroup;


  constructor(private fb: FormBuilder, private parentService: ParentService) {
    var userJSON = localStorage.getItem('user')
    if (userJSON == null)

      return;
    var user = JSON.parse(userJSON);

    this.ParentRegForm = this.fb.group({
      StudentID: [user.studentID],
      Father: [''],
      Mother: [''],
      FOccupation: [''],
      MOccupation: [''],
      FContact: [''],
      MContact: [''],


    })
  }



  OnSubmit() {
    this.parentService.insertparentinfo(this.ParentRegForm.value)
  }

  ngOnInit(): void {
  }
}
