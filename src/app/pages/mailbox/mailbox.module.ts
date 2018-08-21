import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxRoutingModule } from './mailbox-routing.module';
import { ComposeComponent } from './compose/compose.component';
import { ReadMailComponent } from './read-mail/read-mail.component';

@NgModule({
  imports: [
    CommonModule,
    MailboxRoutingModule
  ],
  declarations: [ComposeComponent, ReadMailComponent]
})
export class MailboxModule { }
