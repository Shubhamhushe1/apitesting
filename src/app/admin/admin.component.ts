import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Admin, AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  admin: Admin = new Admin("", "", 0);

  constructor(private adminService: AdminService){ }

  insertAdmin() {
    this.adminService.insertAdmin(this.admin).subscribe();

  }


}
