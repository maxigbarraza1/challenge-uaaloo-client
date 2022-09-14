import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  constructor() { }

  getErrorMessage(field:string, errors:any){
    let message:string='';
    if(errors.required){
      message=`El campo ${field} es requerido`;
    }else if(errors.minlength){
      const requiredLength=errors.minlength.requiredLength;
      message=`El campo ${field} debe tener al menos ${requiredLength} caracteres`;
    }else if(errors.maxlength){
      const maxLength=errors.maxlength.requiredLength;
      message=`El campo ${field} no puede tener mas de ${maxLength} caracteres`;
    }
    return message;
  }
}
