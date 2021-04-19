import { Component } from '@angular/core';
import { UserService } from './user.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  constructor(public service:UserService){}//יצירת מופע של הסרויס
  allUsers(){//בלחיצה על הכפתור באפ יגיעו לפה
    this.service.getAllUsers().subscribe(succ=>{console.log(succ), err=>{console.log(err)}});
  }

} 
