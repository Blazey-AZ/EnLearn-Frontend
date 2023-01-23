import { Component, OnInit } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { AccountServiceService } from 'src/app/_services/account-service.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  constructor( public accountService : AccountServiceService) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.newlogout();
  }

}
