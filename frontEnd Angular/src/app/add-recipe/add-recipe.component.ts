import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../Models/Recipe';
import { Router } from '@angular/router';
import swal from 'sweetalert';
// import swal, { SweetAlert } from "./core";
import { Category } from '../Models/Category';
import { User } from '../Models/User';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  arrNewRecipe:string[]=[""];
  newPreparation:string[]=[""]
  myCategory:string[]=["עוגות", "עוגיות", "קינוחים", "בריאות"];
  myChoose:string;
  temp:number;
  myRecipe:Recipe=new Recipe(this.ser.index,null,null,null,null,null,null,null,null,null,null);
  arrImg:string[]=["./assets/idr9.png", "./assets/idr10.png", "./assets/idr12.png", "./assets/idr15.png",
   "./assets/p1.png", "./assets/p2.png", "./assets/p4.png", "./assets/p5.png", "./assets/p6.png", "./assets/p7.png",
   "./assets/p8.png", "./assets/p9.png", "./assets/p10.png",];
  constructor(public ser:RecipeService, public rout:Router) { }

  ngOnInit(): void {
  }
  
  funcindex(index){
    return index;
  }

  add(){
    this.arrNewRecipe=this.arrNewRecipe.filter(x=>x!="");   
    this.arrNewRecipe.push("");
  }

  addPreparation(){
    this.newPreparation=this.newPreparation.filter(x=>x!="");   
    this.newPreparation.push("");
  }

  change(img:string){
    this.myRecipe.ImgRoute=img;
  }

  Valid():boolean{
    if(this.myRecipe.NameRp==null){
      swal(" אופס", "שכחת לכתוב את שם המתכון...");
      return false;
    }
    if(this.myRecipe.PreparationTime==null){
      swal("אופס", " שכחת לכתוב את משך זמן ההכנה של המתכון...");
      return false;
    }
    if(this.myRecipe.LevelOfDifficulty==null){
      swal("אופס", " שכחת לכתוב את דרגת הקושי של המתכון...");
      return false;
    }
    if(this.myRecipe.IngredientsList.length==0){
      swal("אופס", " לא הכנסת אף לא מרכיב אחד למתכון...");
      return false;
    }
    if(this.myRecipe.Preparation.length==0){
      swal("אופס", " שכחת לכתוב את שלבי ההכנה של המתכון...");
      return false;
    }
    // if(this.myRecipe.==null){
    //   this.myRecipe.ImgRoute="./assets/p10.png";
    //   return true;
    // }
    if(this.myRecipe.ImgRoute==null){
      this.myRecipe.ImgRoute="./assets/p10.png";
      return true;
    }
    return true;
  }

  save(){
    console.log("nhhhh");
    console.log(this.myChoose);
    for(let i=0; i<this.myCategory.length; i++){ 
      if (this.myCategory[i]==this.myChoose)
        this.temp=i+1;
      this.myRecipe.CodeCat=""+this.temp;
    }
    console.log("temp")
    console.log(this.myRecipe.CodeCat);
    this.myRecipe.Preparation=this.newPreparation.filter(x=>x!="");
    this.myRecipe.IngredientsList=this.arrNewRecipe.filter(x=>x!="");
    console.log(this.myRecipe);
    this.ser.index++;
    let u:User=JSON.parse(sessionStorage.getItem("thisUser"));
    this.myRecipe.UserId=u.UserId;
    if(this.Valid()==true) {
    this.ser.addRecipe(this.myRecipe).subscribe(succ=>{console.log(succ)}, err=>{console.log(err)})
    //swal("good luck!!");
    swal("הצליח!!", "המתכון נוסף בהצלחה!", "success");
    //alert("המתכון נוסף בהצלחה!")
    this.rout.navigate(['allRecipes']);}
  }
}
