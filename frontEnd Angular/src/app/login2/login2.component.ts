import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import * as swal from 'sweetalert';
import { User } from '../Models/User';
import { UserService } from '../user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  constructor(public service: UserService, private rout: Router) { }
  // myUser:User;
  myForm:FormGroup;


  ngOnInit(): void {
    this.myForm=new FormGroup({
      "userName": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]))
    });
  }



  
  myUser: User = new User(0, null, null, null, null);
  // myName:string;
  // myPasword:number;


  checkIfExists() {
    // console.log("checkIfExists");
    this.myUser.Name=this.myForm.value.userName;
    this.myUser.Password=this.myForm.value.password;
    this.service.chekUser(this.myUser).subscribe
      (succ => {
 
       if (succ == 1) {
          swal("הסיסמה שגויה, נסה שנית!");
          this.myUser.Password = null;
        }
        else if(succ==-1){
        this.rout.navigate(['register']);
        swal({
          title: "אינך רשום!",
          text: " אנא בצע הרשמה לאתר",
          icon: "info",
        });
      }
        else{
          swal(" היי "+this.myUser.Name+" שמחים ששבת אלינו:)");
          this.rout.navigate(['allRecipes']);
          sessionStorage.setItem("thisUser", JSON.stringify(succ));
          console.log(succ);
        }
      }
          , err => { console.log(err) }
      );
  }





  // checkIfExists() {
  //   // console.log("checkIfExists");
  //   this.myUser.Name=this.myForm.value.userName;
  //   this.myUser.Password=this.myForm.value.password;
  //   this.service.chekUser(this.myUser).subscribe
  //     (succ => {
  //       if (succ==0){
  //         // succ==0
  //         // this.myUser=succ;
  //         // console.log(this.myUser+" "+succ)
  //         this.rout.navigate(['allRecipes']);
  //         sessionStorage.setItem("thisUser", JSON.stringify(this.myUser));
  //         console.log("succs");
  //       }
  //       else if (succ == 1) {
  //         swal("הסיסמה שגויה, נסה שנית!");
  //         this.myUser.Password = null;
  //       }
  //       else this.rout.navigate(['register'])}
  //         , err => { console.log(err) }
  //     );
  // }

}
