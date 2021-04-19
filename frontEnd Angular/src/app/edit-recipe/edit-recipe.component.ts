import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Models/Recipe';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  constructor(public active:ActivatedRoute, public ser:RecipeService, private rout: Router) { }
  myRecipe:Recipe;
  myCategory:string[]=["עוגות", "עוגיות", "קינוחים", "בריאות"];
  arrImg:string[]=["./assets/idr9.png", "./assets/idr10.png", "./assets/idr12.png", "./assets/idr15.png",
  "./assets/p1.png", "./assets/p2.png", "./assets/p4.png", "./assets/p5.png", "./assets/p6.png", "./assets/p7.png",
  "./assets/p8.png", "./assets/p9.png", "./assets/p10.png",];
  x:number;
  myChoose:string;
  temp:number;
  ngOnInit(): void {
    this.myRecipe=this.ser.recipeChoose;
    this.x=Number(this.myRecipe.CodeCat)-1;
    this.myChoose=this.myCategory[this.x];
    // console.log(8888)
    // console.log(this.myRecipe);
  }

  funcindex(index){
    return index;
  }

  addIngredientsList(){
    this.myRecipe.IngredientsList=this.myRecipe.IngredientsList.filter(x=>x!="");   
    this.myRecipe.IngredientsList.push("");
  }

  addPreparation(){
    this.myRecipe.Preparation=this.myRecipe.Preparation.filter(x=>x!="");   
    this.myRecipe.Preparation.push("");
  }

  saveChanges(){
    for(let i=0; i<this.myCategory.length; i++){
      if (this.myCategory[i]==this.myChoose)
        this.temp=i+1;
      this.myRecipe.CodeCat=""+this.temp;
    }
    this.myRecipe.IngredientsList=this.myRecipe.IngredientsList.filter(x=>x!="");
    this.myRecipe.Preparation=this.myRecipe.Preparation.filter(x=>x!="");
    console.log(this.myRecipe);
    this.ser.saveChanges(this.myRecipe).subscribe(succ=>{console.log(succ)}, err=>{console.log(err)})
    // alert("המתכון שונה בהצלחה!")
    swal("הצליח!!", "המתכון שונה בהצלחה!", "success");
    this.rout.navigate(['allRecipes']);
  }

  cancel(){
    this.rout.navigate(['allRecipes']);
  }

}
