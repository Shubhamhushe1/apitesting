import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Branch, BranchService } from '../branch.service';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.css'
})
export class BranchComponent {

  branch : Branch = new Branch ('', '', '', '', new Date(), new Date());

  constructor(private branchService: BranchService) { }

  addNewBranch(){

    this.branchService.addNewBranch(this.branch).subscribe();

  }


}
