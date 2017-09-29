import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeSingleComponent } from './components/recipe-single/recipe-single.component';

import { RecipesService } from './services/recipes.service'
import { IngredientsService } from './services/ingredients.service'

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: RecipeListComponent },
  { path: 'home/:id', component: RecipeSingleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSingleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
