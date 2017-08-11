import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from "./employeeDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'employees',
        component: EmployeeComponent
      }
    ])

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }


