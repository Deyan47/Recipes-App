import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
