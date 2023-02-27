import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AccountServiceService } from './../../_services/account-service.service';
import { FaithService } from './../../_services/faith.service';
import { Caste } from './../../_models/caste';
import { Course } from './../../_models/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casteview',
  templateUrl: './casteview.component.html',
  styleUrls: ['./casteview.component.scss']
})
export class CasteviewComponent implements OnInit {

  caste: Caste[] = [];

  constructor(private faithService: FaithService, private router: RouterModule, public accountService: AccountServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadCaste();
  }

  loadCaste() {
    this.faithService.getcastedata().subscribe({
      next: caste => this.caste = caste
    })

  }

  onRowDelete(casteID: number) {
    this.faithService.deleteCaste(casteID)
    .subscribe(res => {
      this.toastr.success("Successfully deleted caste!")
        console.log(res);
        
    }, (err) => {
        console.log(err);
    });
  }
  }
  

