import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/Shopping-list.service';
import { Recipe } from './Recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   {
  //     name: 'Test',
  //     description: 'test',
  //     imagePath:
  //       'https://i0.wp.com/www.cocoandash.com/wp-content/uploads/2016/05/One-Bowl-Brownies.jpg?w=1440&ssl=1',
  //     ingredients: [
  //       {
  //         name: 'Meat',
  //         amount: 7,
  //       },
  //       {
  //         name: 'Bread',
  //         amount: 3,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Name',
  //     description: 'Description',
  //     imagePath:
  //       'https://i0.wp.com/www.cocoandash.com/wp-content/uploads/2016/05/One-Bowl-Brownies.jpg?w=1440&ssl=1',
  //     ingredients: [
  //       {
  //         name: 'Potato',
  //         amount: 5,
  //       },
  //     ],
  //   },
  // ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
