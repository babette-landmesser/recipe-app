import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent
  },
  {
    path: '/add-recipe',
    component: AddRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
