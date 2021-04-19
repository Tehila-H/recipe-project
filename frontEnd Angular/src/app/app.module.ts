import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgDetailsComponent } from './img-details/img-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { MinToHourPipe } from './min-to-hour.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';
import { Login2Component } from './login2/login2.component';
// import swal from 'sweetalert';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    ImgDetailsComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    MinToHourPipe,
    AddRecipeComponent,
    LogOutComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
