import { FormGroup } from '@angular/forms';

export class conformValidations{

    public static confirm(control1:string, control2:string){
        return(fg:FormGroup)=>{
            let a=fg.controls[control1].value;
            let b=fg.controls[control2].value;
            if(a==b)
                return null;
            return {"confirmError": {message: "השדות אינם שווים*"}};
        }
    }

}