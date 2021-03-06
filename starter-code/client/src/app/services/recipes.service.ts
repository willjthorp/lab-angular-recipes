import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipesService {

  constructor(private http: Http) {}

  getRecipes() {
   return this.http.get('http://localhost:3000/api/dishes')
     .map((res) => res.json());
   }

   getRecipe(id: string) {
     return this.http.get(`http://localhost:3000/api/dishes/${id}`).map((res) => res.json());
   }

   postIngredient(dishId: string, ingredientId: string, quantity) {
    return this.http.post(`http://localhost:3000/api/dishes/${dishId}/ingredients/${ingredientId}/add`, {quantity: Number(quantity)})
      .map((res) => res.json())
      .subscribe()
  }
}
