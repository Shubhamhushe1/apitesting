import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  insertAdmin(admin: Admin) {
    return this.httpClient.post("http://localhost:8080/insertadmin", admin);
  }
}

export class Admin {
  adminEmail: string;
  password: string;
  mobile: number;

  constructor(adminEmail: string, password: string, mobile: number) {
    this.adminEmail = adminEmail;
    this.password = password;
    this.mobile = mobile;
  }
}
