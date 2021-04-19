import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../Models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'img-details',
  templateUrl: './img-details.component.html',
  styleUrls: ['./img-details.component.css']
})
export class ImgDetailsComponent implements OnInit {
  
  constructor(private rout: Router, public ser:RecipeService) { }
  @Input()
  myRecipe:Recipe;
  ngOnInit(): void {
  }

  view(id: number){
    this.ser.recipeChoose=this.myRecipe;
    console.log("hhhh")
    console.log(this.ser.recipeChoose)
    this.rout.navigate(['recipeDetails',id])
  }

}
