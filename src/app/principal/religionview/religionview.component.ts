import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from './../../_services/account-service.service';
import { RouterModule } from '@angular/router';
import { FaithService } from './../../_services/faith.service';
import { Religion } from './../../_models/religion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-religionview',
  templateUrl: './religionview.component.html',
  styleUrls: ['./religionview.component.scss']
})
export class ReligionviewComponent implements OnInit {

  religion: Religion[] = [];


  constructor(private faithService: FaithService, private router: RouterModule, public accountService: AccountServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadRel();
  }

  loadRel() {
    this.faithService.getreligiondata().subscribe({
      next: religion => this.religion = religion
      
    },)

  }

  onRowDelete(religionID: number) {
    this.faithService.deleteRel(religionID)
    .subscribe(res => {
      this.toastr.success("You have successfully deleted religion!")

        console.log(res);
        
    }, (err) => {
        console.log(err);
    });



    
  }


  

}
