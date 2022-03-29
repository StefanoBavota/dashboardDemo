import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private client?: Client;

  constructor() { }

  setClient(client: Client) {
    this.client = client;
  }

  getClient() {
    return this.client;
  }

}
