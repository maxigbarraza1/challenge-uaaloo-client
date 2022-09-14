
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

import { Client } from '../models/client.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private API_URL = environment.API_URL;

  private clients: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  constructor(private http:HttpClient) {}

  addNewClient(client:Client){
    const URL=`${this.API_URL}/clientes/agregar`
    return this.http.post(URL, {...client})
  }

  getClients():Observable<Client[]>{
    const URL=`${this.API_URL}/clientes`
    return this.http.get<Client[]>(URL);
  }

  updateClientById(clientId:number, client:Client){
    const URL=`${this.API_URL}/clientes/actualizar/${clientId}`
    let clients:Client[] = this.clients.getValue();
    clients[clientId] = client;
    this.clients.next(clients);
    return this.http.patch(URL, {...client})

  }

  removeClientById(clientId:number){
    console.log(clientId)
    const URL=`${this.API_URL}/clientes/eliminar/${clientId}`

    let clients:Client[] = this.clients.getValue();
    clients.splice(clientId, 1);
    this.clients.next(clients);
    console.log(URL);
    return this.http.delete(URL)
  }

  getLocalClients():Observable<Client[]>{
    return this.clients
  }

  setLocalClients(clients: Client[]):void{
    this.clients.next(clients);
  }

  
}
