import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../models/recipe';
import {environment} from '../../../environments/environment';

@Injectable()
export class RecipeService {
  env = environment;

  constructor(private httpClient: HttpClient) {}

  fetchAllRecipesForCurrentUser(): Observable<Recipe[]> {
    return this.httpClient.get(this.env.apiPath + 'recipes');
  }
}
