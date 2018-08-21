import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './advanced/advanced.component';
import { EditorsComponent } from './editors/editors.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  {
    path: 'advanced',
    component: AdvancedComponent
  }, {
    path: 'editors',
    component: EditorsComponent
  }, {
    path: 'general',
    component: GeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
