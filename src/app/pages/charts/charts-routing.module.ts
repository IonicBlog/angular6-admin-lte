import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { FlotComponent } from './flot/flot.component';
import { InlineComponent } from './inline/inline.component';
import { MorrisComponent } from './morris/morris.component';

const routes: Routes = [
  {
    path: 'chartjs',
    component: ChartjsComponent
  }, {
    path: 'flot',
    component: FlotComponent
  }, {
    path: 'inline',
    component: InlineComponent
  }, {
    path: 'morris',
    component: MorrisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {

}
