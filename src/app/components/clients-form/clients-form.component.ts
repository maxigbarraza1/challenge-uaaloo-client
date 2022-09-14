import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientesService } from '../../services/clientes.service';
import { DialogData } from '../../models/dialog-data.model';
import { ErrorMessagesService } from '../../services/error-messages.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.sass']
})
export class ClientsFormComponent implements OnInit {

  clientForm: FormGroup = this.fb.group({
    nombre: ['', [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(20)
            ],],
    apellido: ['', [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(20)
            ], ],
    direccion: ['', [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(20)
            ], ]
  })

  @Input() data? : DialogData

  constructor(private readonly fb:FormBuilder,
              private readonly errorMsgService:ErrorMessagesService,
              private readonly clientService:ClientesService,
              private readonly router:Router,
              ) { }

  ngOnInit(): void {
    if(this.data){
      this.clientForm.patchValue(this.data.client);
    }
  }

  validateField(field:string){
    return this.clientForm.controls[field].errors
            && this.clientForm.controls[field].touched;
  }

  getErrorMessage(field:string):string{
    const errors = this.clientForm.controls[field].errors
    return this.errorMsgService.getErrorMessage(field, errors);
  }

  submit(){
    if(this.clientForm.invalid){
      this.clientForm.markAllAsTouched();
      return;
    }
    const {nombre, apellido, direccion} = this.clientForm.value;
    const client={
      name: nombre,
      lastname: apellido,
      address:direccion,
    };
    if(!client) return;
    
    if(this.data){
      if(this.data.isOpenForEdit){
        this.clientService.updateClientById(this.data.index, client).subscribe(()=>{
          this.data?.dialogRef.close();
        });
      }
    }else{
      this.clientService.addNewClient(client).subscribe(resp=>{
        Swal.fire({
          title: 'Cliente agregado',
          text: `¿Deseas revisar la lista de clientes?`,
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, quiero hacerlo!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/clients'])
          }
        })
      })
    }
    this.clientForm.reset();
  }

}
