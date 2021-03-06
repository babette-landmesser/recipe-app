import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  declarations: [
    RecipesListComponent
  ]
})
export class RecipesModule { }
