import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegstrComponent } from './regstr/RegstrComponent';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  //dashboard
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'register',component:RegstrComponent
  },
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
