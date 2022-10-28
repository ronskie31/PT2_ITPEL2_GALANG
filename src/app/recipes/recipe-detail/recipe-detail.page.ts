import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from 'src/app/recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe:Recipe;
  

  constructor( 
    private activateRoute: ActivatedRoute,
    private recipesService:RecipesService,
    private router: Router,
    private alertCrtl: AlertController
    )
     { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    })
  }

  deleteRecipe(){
    this.alertCrtl
    .create( {
      header:'Delete Confirmation',
      message:'Do you want to delete this item?',
      buttons: [{
        text: 'Cancel',
        role:'cancel'
      },
    {
      text:'Delete',
      handler: ()=> {
        this.recipesService.onDeleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['./recipes']);
      }
    }]
    })
  .then(alertEl => {
    alertEl.present();
  });
  }

}

