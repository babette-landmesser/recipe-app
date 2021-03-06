import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PublicLayoutComponent} from './public-layout/public-layout.component';
import {AuthGuard} from './core/services/authguard.service';
import {RestrictedLayoutComponent} from './restricted-layout/restricted-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: RestrictedLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'recipes',
        loadChildren: 'app/recipes/recipes.module#RecipesModule',
      }
    ]
  },
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
