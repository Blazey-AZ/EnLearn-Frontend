import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {


  public readonly previousPage : string | null
  constructor(private readonly router : Router) {
    var previousNavigation = this.router.getCurrentNavigation()?.previousNavigation;
    console.log(previousNavigation)
    if(previousNavigation != null && previousNavigation.finalUrl != null){
      this.previousPage = previousNavigation.finalUrl.toString();
    }else {
      this.previousPage = null;
    }
  }

  ngOnInit(): void {
  }
  sentToPrevious() {
    this.router.navigate([this.previousPage])
  }

}
