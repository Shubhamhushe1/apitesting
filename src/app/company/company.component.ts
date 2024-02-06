import { Component } from '@angular/core';
import { Company, CompanyService } from '../company.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  company: Company = new Company("", "", "", "");

  constructor(private companyService: CompanyService) { }

  addCompany() {
    this.companyService.addCompany(this.company).subscribe();
  }

}
