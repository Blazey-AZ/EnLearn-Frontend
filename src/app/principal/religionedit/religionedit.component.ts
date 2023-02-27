import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AccountServiceService } from './../../_services/account-service.service';
import { RouterModule } from '@angular/router';
import { FaithService } from './../../_services/faith.service';
import { Religion } from './../../_models/religion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-religionedit',
  templateUrl: './religionedit.component.html',
  styleUrls: ['./religionedit.component.scss']
})
export class ReligioneditComponent implements OnInit {

  religion: Religion[] = [];
  clonedProducts: { [s: string]: Religion; } = {};
  localCache = new Map<number, Religion>();

  constructor(private faithService: FaithService, private router: RouterModule, public accountService: AccountServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadRel();
  }

  loadRel() {
    this.faithService.getreligiondata().subscribe({
      next: religion => this.religion = religion
      
    },)

  }



  onRowEditInit(rel: Religion) {
    this.localCache.set(rel.religionID, Object.assign({}, rel));
  }


  onRowEditCancel(item: any, suii: any) {
    this.toastr.error("Save was failed!")

    throw new Error('Method not implemented.');

  }



  onRowEditSave(religion: Religion) {
    if (this.validateString(religion.religionName)) {
      this.faithService.updateRel(religion).subscribe({
        next: value => {
          this.localCache.delete(religion.religionID);
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
