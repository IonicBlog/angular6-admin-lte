import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { AdminFooterComponent } from './layouts/admin-footer/admin-footer.component';
import { AdminLeftSideComponent } from './layouts/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './layouts/admin-content/admin-content.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
