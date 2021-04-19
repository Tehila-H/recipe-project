import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Recipe } from './Models/Recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChoose:Recipe;
  arrAllRecipes:Recipe[];

  constructor(public http:HttpClient) { }
  index:number=8;
  
  getAllRecipe(){
    return this.http.get<Recipe[]>("https://localhost:44386/api/Recipe/getallRecipes");
  }

  addRecipe(r:Recipe): Observable<Recipe>{
    return this.http.post<Recipe>("https://localhost:44386/api/Recipe/AddRecipe", r);
  }

  saveChanges(r: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>("https://localhost:44386/api/Recipe/SaveChanges", r);
  }


}

