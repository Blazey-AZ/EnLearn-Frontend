import { ApplicationstatusviewComponent } from './student/applicationstatusview/applicationstatusview.component';
import { ContactusComponent } from './student/contactus/contactus.component';
import { PersonaldetaileditComponent } from './student/personaldetailedit/personaldetailedit.component';
import { OfficeloginComponent } from './office/officelogin/officelogin.component';
import { ViewappssingularComponent } from './office/viewappssingular/viewappssingular.component';
import { ViewappsComponent } from './office/viewapps/viewapps.component';
import { OfficehomeComponent } from './home/officehome/officehome.component';
import { OfficeviewComponent } from './principal/officeview/officeview.component';
import { OfficeregComponent } from './principal/officereg/officereg.component';
import { ViewapplicationssingularComponent } from './interviewer/viewapplicationssingular/viewapplicationssingular.component';
import { ViewapplicationsComponent } from './interviewer/viewapplications/viewapplications.component';
import { InterviewerviewComponent } from './principal/interviewerview/interviewerview.component';
import { InterviewerregComponent } from './principal/interviewerreg/interviewerreg.component';
import { InterviewhomeComponent } from './home/interviewhome/interviewhome.component';
import { InterviewerloginComponent } from './interviewer/interviewerlogin/interviewerlogin.component';
import { StateeditComponent } from './principal/stateedit/stateedit.component';
import { ReligioneditComponent } from './principal/religionedit/religionedit.component';
import { DistrictviewComponent } from './principal/districtview/districtview.component';
import { StateviewComponent } from './principal/stateview/stateview.component';
import { CasteviewComponent } from './principal/casteview/casteview.component';
import { ReligionviewComponent } from './principal/religionview/religionview.component';
import { ApplicationviewsingularComponent } from './principal/applicationviewsingular/applicationviewsingular.component';
import { ApplicationsviewComponent } from './principal/applicationsview/applicationsview.component';
import { PersonaldetailviewComponent } from './principal/personaldetailview/personaldetailview.component';
import { StudentviewComponent } from './principal/studentview/studentview.component';
import { ApplicationregComponent } from './student/applicationreg/applicationreg.component';
import { PersonaldetailsComponent } from './student/personaldetails/personaldetails.component';
import { CourseeditComponent } from './principal/courseedit/courseedit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { GuesthomeComponent } from './home/guesthome/guesthome.component';
import { UserhomeComponent } from './home/userhome/userhome.component';
import { NavComponent } from './nav/nav.component';
import { CourseregComponent } from './principal/coursereg/coursereg.component';
import { CourseviewComponent } from './principal/courseview/courseview.component';
import { DistrictregComponent } from './principal/districtreg/districtreg.component';
import { PrincipalloginComponent } from './principal/principallogin/principallogin.component';
import { StateregComponent } from './principal/statereg/statereg.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentregisterComponent } from './student/studentregister/studentregister.component';

import { AuthGuard } from './_guards/auth.guard';
import { Auth2Guard } from './_guards/auth2.guard';
import { RoleguardGuard } from './_guards/roleguard.guard';
import { AdminnavComponent } from './principal/adminnav/adminnav.component';
import { CasteregComponent } from './principal/castereg/castereg.component';
import { ReligionregComponent } from './principal/religionreg/religionreg.component';
import { ImagesComponent } from './student/images/images.component';
import { ParentregComponent } from './student/parentreg/parentreg.component';
import { ParentviewComponent } from './student/parentview/parentview.component';


const routes: Routes = [
  { path: 'guesthome', component: GuesthomeComponent },
  { path: '', redirectTo: '/guesthome', pathMatch: 'full' },
  { path: 'nav', component: NavComponent },

  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],

    children: [

      { path: 'userhome', component: UserhomeComponent },
      { path: 'personaldetails', component: PersonaldetailsComponent },
      { path: 'applicationreg', component: ApplicationregComponent },
      { path: 'personaldetailsview', component: PersonaldetaileditComponent },
      { path: 'applicationstatusview', component: ApplicationstatusviewComponent },
      { path: 'parentreg', component: ParentregComponent },
      { path: 'parentview', component: ParentviewComponent },



    ]
  },
  { path: 'image', component: ImagesComponent },
  { path: 'contactus', component: ContactusComponent },


  { path: 'statereg', component: StateregComponent },
  { path: 'districtreg', component: DistrictregComponent },
  { path: 'coursereg', component: CourseregComponent },
  { path: 'courseview', component: CourseviewComponent },
  { path: 'courseedit', component: CourseeditComponent },
  { path: 'studentview', component: StudentviewComponent },
  { path: 'personaldetailview/:id', component: PersonaldetailviewComponent },
  { path: 'applicationsview', component: ApplicationsviewComponent },
  { path: 'applicationview/:id', component: ApplicationviewsingularComponent },
  { path: 'castereg', component: CasteregComponent },
  { path: 'religionreg', component: ReligionregComponent },
  { path: 'religionview', component: ReligionviewComponent },
  { path: 'casteview', component: CasteviewComponent },
  { path: 'stateview', component: StateviewComponent },
  { path: 'districtview', component: DistrictviewComponent },
  { path: 'religionedit', component: ReligioneditComponent },
  { path: 'stateedit', component: StateeditComponent },
  { path: 'interviewerreg', component: InterviewerregComponent },
  { path: 'officereg', component: OfficeregComponent },
  { path: 'interviewerview', component: InterviewerviewComponent },
  { path: 'officeview', component: OfficeviewComponent },





  { path: 'interviewerhome', component: InterviewhomeComponent },
  { path: 'viewapplications', component: ViewapplicationsComponent },
  { path: 'viewapplications/:id', component: ViewapplicationssingularComponent },




  { path: 'officehome', component: OfficehomeComponent },
  { path: 'viewapps', component: ViewappsComponent },
  { path: 'viewappssingular/:id', component: ViewappssingularComponent },





  { path: 'studentlogin', component: StudentloginComponent },
  { path: 'interviewerlogin', component: InterviewerloginComponent },
  { path: 'officelogin', component: OfficeloginComponent },

  { path: 'principallogin', component: PrincipalloginComponent },
  { path: 'adminnav', component: AdminnavComponent },

  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', component: GuesthomeComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
