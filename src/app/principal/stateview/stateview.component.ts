import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AccountServiceService } from './../../_services/account-service.service';
import { RouterModule } from '@angular/router';
import { LocationService } from 'src/app/_services/location.service';
import { State } from './../../_models/state';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stateview',
  templateUrl: './stateview.component.html',
  styleUrls: ['./stateview.component.scss']
})
export class StateviewComponent implements OnInit {

  state: State[] = [];
  

  constructor(private locationService: LocationService, private router: RouterModule, public accountService: AccountServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadRel();
  }

  loadRel() {
    this.locationService.getstatedata().subscribe({
      next: state => this.state = state
      
    },)

  }

  onRowDelete(stateID: number) {
    this.locationService.deleteState(stateID)
    .subscribe(res => {
      this.toastr.success("You have successfully deleted state!")

        console.log(res);
        
    }, (err) => {
        console.log(err);
    });



    
  }


  
}
