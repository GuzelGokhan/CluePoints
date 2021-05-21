import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://mighty-oasis-32829.herokuapp.com/api/';

  constructor(private _http: HttpClient) { }

  getClients() {
    return this._http.get<Client[]>(this.apiUrl + "clients");
  }

  getAccounts() {
    return this._http.get<Account[]>(this.apiUrl + "accounts");
  }

}


