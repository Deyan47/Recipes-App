import { Ingredient } from '../shared/ingredient.model';

// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;

//   constructor(name: string, desc: string, imagePath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imagePath;
//   }
// }

// No need to use class, exept we'll use a method

export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
