import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service'
import { IngredientsService } from '../../services/ingredients.service'


@Component({
  selector: 'app-recipe-single',
  templateUrl: './recipe-single.component.html',
  styleUrls: ['./recipe-single.component.css']
})
export class RecipeSingleComponent implements OnInit {

  recipeId: string;

  recipeSingle: any;

  ingredientList: any;

  constructor(private route: ActivatedRoute, private recipes: RecipesService, private ingredients: IngredientsService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.recipeId = params['id']);
    this.getRecipe();
    this.getIngredients();
  }

  getRecipe() {
    this.recipes.getRecipe(this.recipeId).subscribe((recipe) => this.recipeSingle = recipe);
  }

  getIngredients() {
    this.ingredients.getIngredients().subscribe((ingredients) => this.ingredientList = ingredients);
  }

}
