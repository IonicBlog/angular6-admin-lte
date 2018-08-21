import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { FlotComponent } from './flot/flot.component';
import { InlineComponent } from './inline/inline.component';
import { MorrisComponent } from './morris/morris.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [ChartjsComponent, FlotComponent, InlineComponent, MorrisComponent]
})
export class ChartsModule { }
