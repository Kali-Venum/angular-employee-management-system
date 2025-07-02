export class Employee {
  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.job_title = '';
    this.managerId = 0;
    this.salary = 0;
  }

  first_name: string;
  last_name: string;
  job_title: string;
  managerId: number;
  salary: number;
}

export interface IManager {
  first_name: string;
  last_name: string;
  salary: 0;
}
