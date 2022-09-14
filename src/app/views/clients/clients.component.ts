import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  constructor(private clientsService:ClientesService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe(resp=>{
      this.clientsService.setLocalClients(resp);
    })
  }

}
