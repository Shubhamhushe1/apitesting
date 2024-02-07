import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin/admin.component';
import { BranchComponent } from './branch/branch.component';

export const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'branch', component: BranchComponent }
];
