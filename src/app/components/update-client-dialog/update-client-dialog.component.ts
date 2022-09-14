import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Client } from '../../models/client.model';
import { ClientsFormComponent } from '../clients-form/clients-form.component';
import { DialogData } from '../../models/dialog-data.model';

@Component({
  selector: 'app-update-client-dialog',
  templateUrl: './update-client-dialog.component.html',
  styleUrls: ['./update-client-dialog.component.sass']
})
export class UpdateClientDialogComponent implements OnInit {

  completeData:DialogData;

  constructor(public dialogRef: MatDialogRef<ClientsFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                client:Client, 
                isOpenForEdit:boolean,
                index:number,
              }) {
    this.completeData = {
      ...data,
      dialogRef: this.dialogRef
    }
  }

  ngOnInit(): void {
  }

}
