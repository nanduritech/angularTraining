import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElemensComponent } from './elemens/elemens.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OverviewComponent } from './stadium-details/overview/overview.component';
import { SpecificationsComponent } from './stadium-details/specifications/specifications.component';
import { StadiumDetailsComponent } from './stadium-details/stadium-details.component';

const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'registration', component:RegistrationComponent },
  {path:'signup',component:SignUpComponent},
  {path:'Elemens',component:ElemensComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'pipes',component:PipesDemoComponent},
  {path:'stadiumDetails/:id',component:StadiumDetailsComponent,
  children:[
    {path:'', component:OverviewComponent},
    {path:'overview', component:OverviewComponent},
    {path:'specifications',component:SpecificationsComponent}
  ]
},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
