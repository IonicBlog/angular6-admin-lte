import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlankComponent } from './blank/blank.component';
import { ErrorComponent } from './error/error.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicePrintComponent } from './invoice-print/invoice-print.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { PaceComponent } from './pace/pace.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'blank',
    component: BlankComponent
  }, {
    path: 'error',
    component: ErrorComponent
  }, {
    path: 'invoice',
    component: InvoiceComponent
  }, {
    path: 'invoice-print',
    component: InvoicePrintComponent
  }, {
    path: 'lockscreen',
    component: LockscreenComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: 'pace',
    component: PaceComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
