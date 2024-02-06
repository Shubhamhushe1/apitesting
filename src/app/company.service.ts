import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpclient:HttpClient) { }


  addCompany(company: Company) {
  
    return this.httpclient.post("http://localhost:8080/addcompany", company)
  
  }
  
  }
  
  export class Company{
  
    companyName: string;
    numberOfEmployees:string;
    companyEmail:string;
    gstNumber:string;
  
    constructor( companyName: string,numberOfEmployees:string,companyEmail:string,gstNumber:string) {
      this.companyName = companyName;
      this.numberOfEmployees = numberOfEmployees;
      this.companyEmail = companyEmail;
      this.gstNumber = gstNumber;
    }
}




