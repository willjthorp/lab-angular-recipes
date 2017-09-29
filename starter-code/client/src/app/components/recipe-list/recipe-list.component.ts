import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../../services/recipes.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipes: RecipesService) { }

  recipeList: any;

  ngOnInit() {}

  getRecipe() {
    this.recipes.getRecipes()
      .subscribe((recipe) => this.recipeList = recipe);
  }

}
