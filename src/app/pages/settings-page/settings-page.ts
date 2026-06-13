import { Component, effect, inject } from '@angular/core';
import { ProfileHeader } from '../../common-ui/profile-header/profile-header';
import {
  FormBuilder,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProfileService } from '../../data/services/profile';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  imports: [ProfileHeader, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss',
})
export class SettingsPage {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{ value: '', disabled: true }, Validators.required],
    description: [''],
    stack: [''],
  });

  constructor() {
    effect(() => {
      //@ts-ignore
      this.form.patchValue(this.profileService.me());
    });
  }

  onSave() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();

    if (this.form.invalid) return;
    //@ts-ignore
    firstValueFrom(this.profileService.patchProfile(this.form.value));
  }
}
