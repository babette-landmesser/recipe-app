import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {AddRecipeComponent} from './add-recipe/add-recipe.component';
import {EditRecipeComponent} from './edit-recipe/edit-recipe.component';
import {ViewRecipeComponent} from './view-recipe/view-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesListComponent
  },
  {
    path: '/add-recipe',
    component: AddRecipeComponent
  },
  {
    path: '/:id',
    component: ViewRecipeComponent
  },
  {
    path: '/:id/edit',
    component: EditRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
