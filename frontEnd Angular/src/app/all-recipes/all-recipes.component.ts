import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Models/Recipe';
import { RecipeService } from '../recipe.service';
import { Category } from '../Models/Category';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(public recSer:RecipeService) { }
  arrRecipe:Recipe[]=[];//יש בו את כל המתכונים
  arrRecipeFilter:Recipe[]=[];
  nameRp:string="";
  category:string="";
  time:number=0;
  x:number;
  myCategory:string[]=["עוגות", "עוגיות", "קינוחים", "בריאות"];
  ngOnInit(): void {
    this.recSer.getAllRecipe().subscribe(succ=>{this.recSer.arrAllRecipes=succ, this.arrRecipe=succ,this.arrRecipeFilter=succ, console.log(succ), err=>{console.log(err)}});
    // this.arrRecipeFilter=this.arrRecipe;
  }

  search(){
    console.log("click");
    // this.recSer.arrAllRecipes;
    this.arrRecipeFilter=this.arrRecipe;
    if(this.nameRp!=null && this.nameRp!="" )
    this.arrRecipeFilter=this.arrRecipeFilter.filter(r=>r.NameRp.includes(this.nameRp));

    if(this.time!=0)
    this.arrRecipeFilter=this.arrRecipeFilter.filter(r=>r.PreparationTime<=this.time);
    
    if(this.category!=null && this.category!="" ){
      for(let i=0; i<this.myCategory.length; i++){
        if(this.myCategory[i]==this.category)
          this.x=i+1;
      }
      this.arrRecipeFilter=this.arrRecipeFilter.filter(r=>Number(r.CodeCat)==this.x);
    }

  }

  cancal(){
    this.arrRecipeFilter=this.arrRecipe;
    this.nameRp="";
    this.category=null;
    this.time=0;
  }


  // f(){
  //   this.filterlist=this.listRecipe;
  
  //   if(this.name)
  // {
  //   this.filterlist=this.filterlist.filter(filt=>filt.Name.indexOf(this.name)>=0);
  
  //   console.log(this.filterlist)
  
  // }
  // if(this.time)
  // {
  //   this.filterlist=this.filterlist.filter(filt=>filt.PreparationTime<=this.time);
  //   console.log(this.filterlist)
  // }
  
  // if(this.category)
  // {
  //   this.filterlist=this.filterlist.filter(filt=>filt.Name.indexOf(this.name)>=0);
  //   console.log(this.filterlist)
  // }
  
  // }
}
