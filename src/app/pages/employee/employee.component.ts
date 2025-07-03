import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  managerList: any = [];

  http = inject(HttpClient);
  masterService = inject(MasterService);

  isAddEmployeeOpen = signal<boolean>(false);

  employeeForm: any = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobTitle: new FormControl(''),
    manager: new FormControl(''),
    salary: new FormControl(0),
  });

  handleAddEmployee() {
    console.log(this.employeeForm.value, 'values');
  }

  gettingAllManagers() {
    this.http
      .get('http://localhost:9000/emp/api/v1/managers')
      .subscribe((response: any) => {
        this.managerList = [...response];
      });

  console.log(this.managerList, "managerList")
  }

  ngOnInit(): void {
    this.gettingAllManagers();
  }

  openAddNewEmploySection() {
    this.isAddEmployeeOpen.set(true);
  }

  closeAddNewEmploySection() {
    this.isAddEmployeeOpen.set(false);
  }

  getManagersList() {
    this.masterService
      .getManagers()
      .subscribe((response: any) => (this.managerList = response));
  }
}
