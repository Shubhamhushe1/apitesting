import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private httpClient:HttpClient) { }

  addNewBranch(branch: Branch){

    return this.httpClient.post("http://localhost:8080/addNewBranch",branch)

  }
}

export class Branch {
 
  officeName: string;
  officeLocation: string;
  officeNumber: string;
  officeEmail: string;
  inTime: Date;
  outTime: Date;

 constructor(officeName: string,officeLocation: string,officeNumber: string,officeEmail: string,inTime: Date,outTime: Date) {

  this.officeName = officeName;
  this.officeLocation = officeLocation;
  this.officeNumber = officeNumber;
  this.officeEmail = officeEmail;
  this.inTime = inTime;
  this.outTime = outTime;

 }


}