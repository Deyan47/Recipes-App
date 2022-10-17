import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './Recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    {
      name: 'Test',
      description: 'test',
      imagePath:
        'https://i0.wp.com/www.cocoandash.com/wp-content/uploads/2016/05/One-Bowl-Brownies.jpg?w=1440&ssl=1',
    },
    {
      name: 'Name',
      description: 'Description',
      imagePath:
        'https://i0.wp.com/www.cocoandash.com/wp-content/uploads/2016/05/One-Bowl-Brownies.jpg?w=1440&ssl=1',
    },
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
