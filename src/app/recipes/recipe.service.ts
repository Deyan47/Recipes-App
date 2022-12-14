import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/Shopping-list.service';
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
      ingredients: [
        {
          name: 'Meat',
          amount: 7,
        },
        {
          name: 'Bread',
          amount: 3,
        },
      ],
    },
    {
      name: 'Name',
      description: 'Description',
      imagePath:
        'https://i0.wp.com/www.cocoandash.com/wp-content/uploads/2016/05/One-Bowl-Brownies.jpg?w=1440&ssl=1',
      ingredients: [
        {
          name: 'Potato',
          amount: 5,
        },
      ],
    },
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
