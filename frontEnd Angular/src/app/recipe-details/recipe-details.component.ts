import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../Models/Recipe';
import { RecipeService } from '../recipe.service';
import { User } from '../Models/User';
import swal from 'sweetalert';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(public active:ActivatedRoute, public ser:RecipeService, private rout: Router) {

   }
  myRecipe:Recipe;
  // myLevel:number=this.myRecipe.LevelOfDifficulty;
  myIcon:string="./assets/icon.PNG";
  idRp:number;
  text:string;
  arrLevel:string[]=[];
  arrLevel2:string[]=[];
  thisUser:User=JSON.parse(sessionStorage.getItem("thisUser"));
  myCategory:string[]=["עוגות", "עוגיות", "קינוחים", "בריאות"];
  x:number;
  category1:string;
  CategoryIcon:string;
  myIcons:string[]=["./assets/uu1.JPG", "./assets/uu2.JPG", "./assets/uu3.JPG", "./assets/uu4.JPG"]
  

  ngOnInit(): void {
    this.active.params.subscribe(succ=>{this.idRp=succ.id});
    // this.myRecipe= this.ser.arrAllRecipes.find(r=>{r.IdRp==this.idRp});
    this.myRecipe=this.ser.recipeChoose;
    console.log("details")
    console.log(this.myRecipe);
    // this.arrLevel=[this.myRecipe.LevelOfDifficulty];
    // console.log(this.arr)
    this.stars();
    this.x=Number(this.myRecipe.CodeCat)-1;
    this.category1=this.myCategory[this.x];
    this.CategoryIcon=this.myIcons[this.x];
  }

  toEdit(){
    this.ser.recipeChoose=this.myRecipe;
    this.rout.navigate(['editRecipe',this.idRp])
  }
  
  stars(){
    console.log("stars");
    for(var x=0; x<this.myRecipe.LevelOfDifficulty; x++){
      this.arrLevel.push("*");
      console.log("*");
    }

    for(var b=0; b<5-this.myRecipe.LevelOfDifficulty; b++){
      this.arrLevel2.push("*");
      console.log("*");
    }
  }
  
  send(){
    if(this.text!=""){
    swal({
      title: "נשלח!",
      text: "תודה על חוות דעתכם...:)",
      icon: "success",
    });}
    else swal("טעות" ,"תיבת הקלט ריקה...");
    this.text="";
  }
}
