import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  managerList: any = [];

  masterService = inject(MasterService);

  isAddEmployeeOpen = signal<boolean>(false);

  ngOnInit(): void {}

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
