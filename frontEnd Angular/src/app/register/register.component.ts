import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { conformValidations } from '../../confirmValidations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService, public rout:Router) { }
  myUser:User=new User(0, null, null, null, null);
  myForm:FormGroup;
  // index:number=4;
  ngOnInit(): void {
    this.myForm=new FormGroup({
      "name": new FormControl("", Validators.required),
      "adress": new FormControl("", Validators.required),
      "mail": new FormControl("", Validators.compose([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])),
      "password": new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)])),
      "confirmPassword": new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)]))
    }, conformValidations.confirm("password", "confirmPassword"));
  }
  toAdd(){
    let u:User=new User(this.service.index++,this.myForm.value.name, this.myForm.value.adress, this.myForm.value.mail, this.myForm.value.password);
    this.service.addUser(u).subscribe(succ=>{console.log(succ), err=>{console.log(err)}});
    sessionStorage.setItem("thisUser", JSON.stringify(u));
    // alert("נוספת בהצלחה!")
    swal("נוספת בהצלחה!");
    this.rout.navigate(['allRecipes']);
  }

}
