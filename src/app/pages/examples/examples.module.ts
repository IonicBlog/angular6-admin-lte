import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { BlankComponent } from './blank/blank.component';
import { InvoicePrintComponent } from './invoice-print/invoice-print.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { PaceComponent } from './pace/pace.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ],
  declarations: [NotFoundComponent, ErrorComponent, BlankComponent, InvoicePrintComponent, InvoiceComponent, LockscreenComponent, LoginComponent, PaceComponent, ProfileComponent, RegisterComponent]
})
export class ExamplesModule { }
