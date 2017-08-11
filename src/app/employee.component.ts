import {Component} from '@angular/core';

@Component({
  selector: 'employee-app',
  template: `<h1>Hier steht der Mitarbeiter</h1>`,
  styleUrls: ['./app.component.css'],
})

export class EmployeeComponent {
  title = 'Employee Adminstration';
  employee: Employee = {
    id: 0,
    firstName : 'Tom',
    lastName : 'W',
    creationData : 'DD:MM:YYYY'
  };
}

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  creationData: any;
}
