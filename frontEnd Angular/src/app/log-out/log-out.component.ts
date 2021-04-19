import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public rout:Router) { }

  ngOnInit(): void {
    let  hh=sessionStorage.getItem("thisUser");
    if(hh==null){
      swal("טעות...", "עוד לא עשיתם התחברות לאתר..!");
      this.rout.navigate(['login']);
    }  
    else swal({
      title: "האם אתה בטוח שברצונך לצאת מהאתר?",
      text: "אם תאשר תצטרך להירשם מחדש בכניסה הבאה",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        sessionStorage.removeItem("thisUser");
        swal("מצוין! היציאה עברה בהצלחה!", {
          icon: "success",
        });
        this.rout.navigate(['login']);
      } 
      else {
        swal("נשארת באתר...");
        this.rout.navigate(['allRecipes']);
      }
    });
    // alert("אתה בטוח שברצונך לצאת מן האתר?")//לתת אופציה של ביטול
    // localStorage.removeItem("thisUser");
    // this.rout.navigate(['allRecipes']);
  }
  // logOut(){
  //   localStorage.removeItem("thisUser");
  //   this.rout.navigate(['allRecipes']);
  // }

}
