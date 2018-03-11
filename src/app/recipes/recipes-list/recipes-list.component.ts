import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../core/services/recipe.service';
import {Recipe} from '../../core/models/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.fetchAllRecipesForCurrentUser().subscribe(
      result => this.recipes = result.response
    );
  }

}
