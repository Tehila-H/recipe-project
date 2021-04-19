import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';
import { canEnter } from './canEnter';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
{path: 'login', component:Login2Component},
{path: 'register', component:RegisterComponent},
{path: 'allRecipes', component: AllRecipesComponent},
{path: 'recipeDetails/:id', component:RecipeDetailsComponent, canActivate:[canEnter]},
{path: 'editRecipe/:id', component:EditRecipeComponent},
{path: 'addRecipe', component:AddRecipeComponent}, 
{path: 'logOut', component:LogOutComponent},
{path: "", component: RegisterComponent, pathMatch: "full"},
{path: '**', component: Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
