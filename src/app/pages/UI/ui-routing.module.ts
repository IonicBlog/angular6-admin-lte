import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { GeneralComponent } from './general/general.component';
import { IconsComponent } from './icons/icons.component';
import { ModalsComponent } from './modals/modals.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent
  }, {
    path: 'general',
    component: GeneralComponent
  }, {
    path: 'icons',
    component: IconsComponent
  }, {
    path: 'modals',
    component: ModalsComponent
  }, {
    path: 'sliders',
    component: SlidersComponent
  }, {
    path: 'timeline',
    component: TimelineComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
