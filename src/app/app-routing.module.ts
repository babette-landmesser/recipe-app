import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicLayoutComponent} from './public-layout/public-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/login/login.module#LoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
