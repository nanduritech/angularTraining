import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ElemensComponent } from './elemens/elemens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { HeaderComponent } from './header/header.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StadiumDetailsComponent } from './stadium-details/stadium-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SignUpComponent,
    ElemensComponent,
    DashboardComponent,
    EmployeeTitlePipe,  
    HeaderComponent,
    PipesDemoComponent,
    NotFoundComponent,
    StadiumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
