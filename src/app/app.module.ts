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
import { TableModule } from 'primeng/table';
import { GuesthomeComponent } from './home/guesthome/guesthome.component';
import { PrincipalloginComponent } from './principal/principallogin/principallogin.component';
import { CourseregComponent } from './principal/coursereg/coursereg.component';
import { ToastrModule } from 'ngx-toastr';
import { Error404Component } from './error404/error404.component';
import { StateregComponent } from './principal/statereg/statereg.component';
import { DistrictregComponent } from './principal/districtreg/districtreg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { CourseviewComponent } from './principal/courseview/courseview.component';
import { CourseeditComponent } from './principal/courseedit/courseedit.component';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { PersonaldetailsComponent } from './student/personaldetails/personaldetails.component';
import { ApplicationregComponent } from './student/applicationreg/applicationreg.component';
import { StudentviewComponent } from './principal/studentview/studentview.component';
import { PersonaldetailviewComponent } from './principal/personaldetailview/personaldetailview.component';
import { ApplicationsviewComponent } from './principal/applicationsview/applicationsview.component';
import { ApplicationviewsingularComponent } from './principal/applicationviewsingular/applicationviewsingular.component';
import { AdminnavComponent } from './principal/adminnav/adminnav.component';
import { CasteregComponent } from './principal/castereg/castereg.component';
import { ReligionregComponent } from './principal/religionreg/religionreg.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CasteviewComponent } from './principal/casteview/casteview.component';
import { ReligionviewComponent } from './principal/religionview/religionview.component';
import { StateviewComponent } from './principal/stateview/stateview.component';
import { DistrictviewComponent } from './principal/districtview/districtview.component';
import { ReligioneditComponent } from './principal/religionedit/religionedit.component';
import { StateeditComponent } from './principal/stateedit/stateedit.component';
import { InterviewerloginComponent } from './interviewer/interviewerlogin/interviewerlogin.component';
import { InterviewhomeComponent } from './home/interviewhome/interviewhome.component';
import { InterviewerregComponent } from './principal/interviewerreg/interviewerreg.component';
import { InterviewerviewComponent } from './principal/interviewerview/interviewerview.component';
import { ViewapplicationsComponent } from './interviewer/viewapplications/viewapplications.component';
import { ViewapplicationssingularComponent } from './interviewer/viewapplicationssingular/viewapplicationssingular.component';
import { OfficeregComponent } from './principal/officereg/officereg.component';
import { OfficeviewComponent } from './principal/officeview/officeview.component';
import { OfficeloginComponent } from './office/officelogin/officelogin.component';
import { OfficehomeComponent } from './home/officehome/officehome.component';
import { ViewappsComponent } from './office/viewapps/viewapps.component';
import { ViewappssingularComponent } from './office/viewappssingular/viewappssingular.component';
import { PersonaldetaileditComponent } from './student/personaldetailedit/personaldetailedit.component';
import { RippleModule } from 'primeng/ripple';
import { SplitterModule } from "primeng/splitter";
import { FieldsetModule, } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import {  GalleriaModule } from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import { ImagesComponent } from './student/images/images.component';
import { ContactusComponent } from './student/contactus/contactus.component';
import { ApplicationstatusviewComponent } from './student/applicationstatusview/applicationstatusview.component';
import { ParentregComponent } from './student/parentreg/parentreg.component';
import { ParentviewComponent } from './student/parentview/parentview.component';
import { ReportenrollComponent } from './principal/reportenroll/reportenroll.component';
import { ReportrejectComponent } from './principal/reportreject/reportreject.component';
import { ReportpassComponent } from './principal/reportpass/reportpass.component';
import { ReportfailComponent } from './principal/reportfail/reportfail.component';
import { ReportverifyComponent } from './principal/reportverify/reportverify.component';
import { ReportunverifyComponent } from './principal/reportunverify/reportunverify.component';








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
    PersonaldetailsComponent,
    ApplicationregComponent,
    StudentviewComponent,
    PersonaldetailviewComponent,
    ApplicationsviewComponent,
    ApplicationviewsingularComponent,
    AdminnavComponent,
    CasteregComponent,
    ReligionregComponent,
    CasteviewComponent,
    ReligionviewComponent,
    StateviewComponent,
    DistrictviewComponent,
    ReligioneditComponent,
    StateeditComponent,
    InterviewerloginComponent,
    InterviewhomeComponent,
    InterviewerregComponent,
    InterviewerviewComponent,
    ViewapplicationsComponent,
    ViewapplicationssingularComponent,
    OfficeregComponent,
    OfficeviewComponent,
    OfficeloginComponent,
    OfficehomeComponent,
    ViewappsComponent,
    ViewappssingularComponent,
    PersonaldetaileditComponent,
    ImagesComponent,
    ContactusComponent,
    ApplicationstatusviewComponent,
    ParentregComponent,
    ParentviewComponent,
    ReportenrollComponent,
    ReportrejectComponent,
    ReportpassComponent,
    ReportfailComponent,
    ReportverifyComponent,
    ReportunverifyComponent,


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
      positionClass: 'toast-top-right'
    }),
    DropdownModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DropdownModule,
    BsDropdownModule.forRoot(),
    RippleModule,
    SplitterModule,
    FieldsetModule,
    AccordionModule,
    GalleriaModule,
    CardModule
    
    
    
    
    







  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
