import { MatDialogRef } from '@angular/material/dialog';
import { Client } from './client.model';

export interface DialogData{
    client:Client, 
    isOpenForEdit:boolean,
    index:number,
    dialogRef:MatDialogRef<any>
}