import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleComponent
  }, {
    path: 'data',
    component: DataComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
