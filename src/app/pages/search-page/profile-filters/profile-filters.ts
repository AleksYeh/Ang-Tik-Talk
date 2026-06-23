import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filters.html',
  styleUrl: './profile-filters.scss',
})
export class ProfileFilters {
  fb = inject(FormBuilder);

  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  });

  constructor() {
    // this.searchForm.
  }
}
