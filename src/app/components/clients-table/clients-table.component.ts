import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Client } from '../../models/client.model';
import { ClientesService } from '../../services/clientes.service';
import { UpdateClientDialogComponent } from '../update-client-dialog/update-client-dialog.component';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.sass']
})
export class ClientsTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['index','name', 'lastname', 'address', 'actions'];
  dataSource = new MatTableDataSource<Client>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly clientService:ClientesService,
              private readonly dialog: MatDialog,) {
    this.clientService.getLocalClients().subscribe((clients:Client[]) => {
      this.dataSource.data = clients;
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(client:Client, index:number){
    this.dialog.open(UpdateClientDialogComponent, {
      width: '400px',
      data: {
        client,
        isOpenForEdit:true,
        index,
      },
    });
  }

  showDeleteAlert(client:Client, index:number){
    Swal.fire({
      title: '¿Estas seguro?',
      text: `Estas intentando eliminar el cliente: ${client.name} ${client.lastname}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero hacerlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.removeClientById(index).subscribe(()=>{
          Swal.fire(
            '¡Eliminado!',
            'El cliente ha sido eliminado.',
            'success'
          )
        });
      }
    })
  }

}
