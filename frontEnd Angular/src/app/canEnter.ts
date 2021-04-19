import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({providedIn:"root"})
export class canEnter implements CanActivate{
    constructor(public rout:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let  hh=sessionStorage.getItem("thisUser");
        if(hh!=null){
            console.log("seessin"+hh);
            return true;
        }  
        else{
            swal("טעות...", "הינך צריך לבצע התחברות לאתר!");
            this.rout.navigate(['login']);
        } 
        return false;
        // if (localStorage.getItem==null){
        //     console.log("אין אפשרות להיכנס");
        //     return false;
        // }
        // else {
        //     console.log(localStorage.getItem);
        //     return true;
        // }
        
    }

}