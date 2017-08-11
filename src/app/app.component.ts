import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <h1>Hallo, {{title}}</h1>
    
    <nav>
    <a routerLink="/employees" routerLinkActive="active">All Employees</a> 
    <a routerLink="/employeeDetail" routerLinkActive="active">Detail</a>
    </nav>
    `
})

export class AppComponent{
  title = "Nutzer!"
}
