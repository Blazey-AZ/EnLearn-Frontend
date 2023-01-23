import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { FormsModule } from '@angular/forms';
import { StudentregisterComponent } from './student/studentregister/studentregister.component';
import { NavComponent } from './nav/nav.component';
import { UserhomeComponent } from './home/userhome/userhome.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Carousel } from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import { GuesthomeComponent } from './home/guesthome/guesthome.component';
import { PrincipalloginComponent } from './principal/principallogin/principallogin.component';
import { CourseregComponent } from './principal/coursereg/coursereg.component';
import { ToastrModule } from 'ngx-toastr';
import { Error404Component } from './error404/error404.component';
import { StateregComponent } from './principal/statereg/statereg.component';
import { DistrictregComponent } from './principal/districtreg/districtreg.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {DropdownModule} from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { CourseviewComponent } from './principal/courseview/courseview.component';
import { CourseeditComponent } from './principal/courseedit/courseedit.component';
import {ButtonModule} from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CoursedeleteComponent } from './principal/coursedelete/coursedelete.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { PersonaldetailsComponent } from './student/personaldetails/personaldetails.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentregisterComponent,
    StudentloginComponent,
    NavComponent,
    UserhomeComponent,
    GuesthomeComponent,
    PrincipalloginComponent,
    CourseregComponent,
    Error404Component,
    StateregComponent,
    DistrictregComponent,
    CourseviewComponent,
    CourseeditComponent,
    CoursedeleteComponent,
    PersonaldetailsComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    CarouselModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    DropdownModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
  
    
    

    

    
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
