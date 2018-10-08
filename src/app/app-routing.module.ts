import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/err404/err404.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: './area/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'account',
    loadChildren: './area/account/account.module#AccountModule'
  },
  {
    path: 'bank',
    loadChildren: './area/admin/bank/bank.module#BankModule'
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
