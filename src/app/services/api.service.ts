import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url ="https://meantaskemployee.onrender.com"

  constructor(private http:HttpClient) {}
  

  getEmployeeAPI(){
    return this.http.get(`${this.server_url}/all-employee`)
   }

  addEmployeeApi(reqBody:any){
    return this.http.post(`${this.server_url}/add-employee`,reqBody)
  }

}
