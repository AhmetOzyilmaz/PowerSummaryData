import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthorizationGuard} from './shared/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthorizationGuard],
    component: DashboardComponent,
    children: [
      {
        path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'devices', loadChildren: () => import('./pages/data/data.module').then(m => m.DataModule)
      },
    ],
  },

  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
