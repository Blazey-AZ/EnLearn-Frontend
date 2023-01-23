import { PersonaldetailsComponent } from './student/personaldetails/personaldetails.component';
import { CoursedeleteComponent } from './principal/coursedelete/coursedelete.component';
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
    ]
  },
  { path: 'studentlogin', component: StudentloginComponent },
  { path: 'principallogin', component: PrincipalloginComponent },
  {
    path: '', runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      
      { path: 'statereg', component: StateregComponent },
      { path: 'districtreg', component: DistrictregComponent },
    ]
  },
  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'personaldetails', component: PersonaldetailsComponent },

  { path: 'coursereg', component: CourseregComponent },
  { path: 'courseview', component: CourseviewComponent },
  { path: 'courseedit', component: CourseeditComponent },
  { path: 'coursedelete', component: CoursedeleteComponent },



  { path: 'error404', component: Error404Component },



  { path: '**', component: GuesthomeComponent, pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
