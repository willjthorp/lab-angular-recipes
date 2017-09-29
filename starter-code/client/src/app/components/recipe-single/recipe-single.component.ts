import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service'


@Component({
  selector: 'app-recipe-single',
  templateUrl: './recipe-single.component.html',
  styleUrls: ['./recipe-single.component.css']
})
export class RecipeSingleComponent implements OnInit {

  recipeId: string;

  recipeSingle: any;

  constructor(private route: ActivatedRoute, private recipes: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.recipeId = params['id']);
    this.getRecipe();
  }

  getRecipe() {
    this.recipes.getRecipe(this.recipeId).subscribe((recipe) => this.recipeSingle = recipe);
  }

}
