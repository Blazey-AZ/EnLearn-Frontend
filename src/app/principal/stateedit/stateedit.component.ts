import { state } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { RouterModule } from '@angular/router';
import { LocationService } from 'src/app/_services/location.service';
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/_models/state';

@Component({
  selector: 'app-stateedit',
  templateUrl: './stateedit.component.html',
  styleUrls: ['./stateedit.component.scss']
})
export class StateeditComponent implements OnInit {

  state: State[] = [];
  clonedProducts: { [s: string]: State; } = {};
  localCache = new Map<number, State>();

  constructor(private locationService: LocationService, private router: RouterModule, public accountService: AccountServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadRel();
  }

  loadRel() {
    this.locationService.getstatedata().subscribe({
      next: state => this.state = state
      
    },)

  }



  onRowEditInit(state: State) {
    this.localCache.set(state.stateID, Object.assign({}, state));
  }


  onRowEditCancel(item: any, suii: any) {
    this.toastr.error("Save was failed!")

    throw new Error('Method not implemented.');

  }



  onRowEditSave(state: State) {
    if (this.validateString(state.stateName)) {
      this.locationService.updateState(state).subscribe({
        next: value => {
          this.localCache.delete(state.stateID);
          this.toastr.success("Save was successfull!")
        },
        error: err => {
          console.log(err);
          
        },
      })
    } 
  }

  private validateString(strin: string): boolean {
    return strin.length > 0
  }
}
