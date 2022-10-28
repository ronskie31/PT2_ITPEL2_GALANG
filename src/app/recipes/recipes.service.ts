import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
    id: 'r1',
    title: 'Starbucks Cafe Mocha',
    imageUrl:'https://copykat.com/wp-content/uploads/2021/11/Starbucks-Cafe-Mocha-Pin-2-360x361.jpg',
    ingredients:['1 cup milk','2 tablespoons chocolate syrup','2 ounces espresso or strong coffee','1 cup heavy whipping cream','2 tablespoons sugar','1 teaspoon vanilla extract']
    
    },
    {
      id: 'r2',
      title: 'Starbucks Egg Bites',
      imageUrl:'https://copykat.com/wp-content/uploads/2020/11/Starbucks-Sous-Vide-Egg-Bites-Pin1-360x361.jpg',
      ingredients:['4 eggs','4 tablespoons cottage cheese','1/4 cup Monterey Jack Cheese shredded','1/4 cup Gruyere cheese shredded','1/4 teaspoon salt','4 pieces thin bacon cooked crisp','1/4 cup Gruyere cheese shredded, use to broil']
      },
    {
      id: 'r3',
      title: 'McDonald’s Big Mac',
      imageUrl:'https://copykat.com/wp-content/uploads/2020/04/Big-Mac-Pin3-360x361.jpg',
      ingredients:['1 1/2 pounds ground chuck','1/2 teaspoon salt','1/4 teaspoon black pepper','1 tablespoon of butter','1/4 cup special sauce','5 slices of American cheese','1 tablespoon minced onion','15 dill pickle slices']
      },
      {
        id: 'r4',
        title: 'McDonald’s Oreo McFlurry',
        imageUrl:'https://copykat.com/wp-content/uploads/2020/12/McDonalds-Oreo-McFlurry-Pin2-360x361.jpg',
        ingredients:['2 cups vanilla ice cream','2 tablespoons whole milk','4 Oreo cookies']
        },
        {
          id: 'r5',
          title: 'KFC Buttermilk Biscuits',
          imageUrl:'https://copykat.com/wp-content/uploads/2022/02/KFC-Buttermilk-Biscuits-Pin-1-360x361.jpg',
          ingredients:['1/2 cup butter (or shortening) chilled','2 1/2 cups self-rising flour','2 1/2 teaspoons sugar','1 teaspoon cream of tartar','1 cup buttermilk','2 tablespoons melted butter']
          },
          {
            id: 'r6',
            title: 'KFC Fried Chicken',
            imageUrl:'https://copykat.com/wp-content/uploads/2021/07/KFC-Fried-Chicken-Pin-1-360x361.jpg',
            ingredients:['2 cups all-purpose flour','⅔ tablespoon salt','½ tablespoon ground thyme','½ tablespoon basil','⅓ tablespoon oregano','1 tablespoon celery salt','1 tablespoon black pepper','1 tablespoon dry mustard powder','4 tablespoon paprika','2 tablespoons garlic salt','1 tablespoon ground ginger','3 tablespoons ground white pepper','½ teaspoon Accent flavor enhancer (MSG) optional','1 whole chicken','1 egg beaten','1 cup full-fat buttermilk','vegetable oil for frying']
            }
            
];

  constructor() { }

    getAllRecipes(){
      return[...this.recipes];
    }

    getRecipe(recipeId: string){
      return{...this.recipes.find(recipe => recipe.id == recipeId)}
    }
    
    onDeleteRecipe(recipeId:string){
      this.recipes = this.recipes.filter(recipe=> {
        return recipe.id !==recipeId;
      });
    }
}
