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
  results: string;
  ingredientList: Object[];


  constructor(private route: ActivatedRoute, private recipes: RecipesService, private ingredients: IngredientsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.recipeId = params['id']);
    this.getRecipe();
    this.getIngredients();
  }

  getRecipe() {
    this.recipes.getRecipe(this.recipeId).subscribe((recipe) => {this.recipeSingle = recipe});
  }

  getIngredients() {
    this.ingredients.getIngredients().subscribe((ingredients) => (this.ingredientList = ingredients));
  }

  handleAddIngredient(recipeId: string, ingredientId: string, quantity: string, ingredientName: string) {
    this.recipes.postIngredient(recipeId, ingredientId, quantity);

    let found = false
    this.recipeSingle.ingredients.forEach((element) => {
      if (element.ingredientId._id === ingredientId) {
        element.quantity = parseInt(element.quantity) + parseInt(quantity)
        found = true
      }
    })
    if (!found) {
      this.recipeSingle.ingredients.push({ingredientId: {_id: ingredientId, name: ingredientName}, quantity: quantity})
    }
  }

}
