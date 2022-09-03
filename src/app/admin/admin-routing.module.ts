import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent,canDeactivate:[AuthGuardService], }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
