import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/_services/account-service.service';
import { RouterModule } from '@angular/router';
import { LocationService } from 'src/app/_services/location.service';
import { District } from './../../_models/district';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss']
})
export class DistrictviewComponent implements OnInit {

  dist: District[] = [];

  constructor(private locationService: LocationService, private router: RouterModule, public accountService: AccountServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadDist();
  }

  loadDist() {
    this.locationService.getdistrict().subscribe({
      next: dist => this.dist = dist
    })

  }

  onRowDelete(districtID: number) {
    this.locationService.deleteDistrict(districtID)
    .subscribe(res => {
      this.toastr.success("Successfully deleted district!")
        console.log(res);
        
    }, (err) => {
        console.log(err);
    });
  }
}
