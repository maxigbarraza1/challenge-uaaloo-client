import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateClientDialogComponent } from './update-client-dialog/update-client-dialog.component';

import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [
    ClientsFormComponent,
    ClientsTableComponent,
    NavbarComponent,
    UpdateClientDialogComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    ClientsFormComponent,
    ClientsTableComponent,
    NavbarComponent,
  ],
  
})
export class ComponentsModule { }
