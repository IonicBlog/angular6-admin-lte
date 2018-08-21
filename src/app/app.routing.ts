import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { NotFoundComponent } from './pages/examples/not-found/not-found.component';

export const routes: Routes = [{
    path: '',
    component: LayoutsComponent,
    children: [
        {
            path: 'charts',
            loadChildren: './pages/charts/charts.module#ChartsModule'
        },
        {
            path: 'examples',
            loadChildren: './pages/examples/examples.module#ExamplesModule'
        },
        {
            path: 'forms',
            loadChildren: './pages/forms/forms.module#FormsModule'
        },
        {
            path: 'mailbox',
            loadChildren: './pages/mailbox/mailbox.module#MailboxModule'
        },
        {
            path: 'tables',
            loadChildren: './pages/tables/tables.module#TablesModule'
        },
        {
            path: 'UI',
            loadChildren: './pages/UI/ui.module#UIModule'
        },
        {
            path: 'dashboard',
            loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
        }]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }