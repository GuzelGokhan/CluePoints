import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { Account } from './account.model';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  clients$: Client[];
  accounts$: Account[];
  searchClient: string ; 
  constructor(private dataService: DataService) { };

  ngOnInit() {
    this.dataService.getClients()
      .subscribe(data => this.clients$ = data);
    this.dataService.getAccounts()
      .subscribe(data => this.accounts$ = data);
  }
}
