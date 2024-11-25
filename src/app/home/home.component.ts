import { Component, NgModule } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  employees: any[] = [];
  showModal: boolean = false;
  newEmployee = { name: '', contact: '', email: '', address: '' };

  constructor(private api:ApiService) {}

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.api.getEmployeeAPI().subscribe((res:any)=>{
      this.employees = res
    })
  }

  addEmployee() {
    this.api.addEmployeeApi(this.newEmployee).subscribe(() => {
      this.getEmployees();
      this.newEmployee = { name: '', contact: '', email: '', address: '' };
      this.showModal = false;
    });
  }


}
