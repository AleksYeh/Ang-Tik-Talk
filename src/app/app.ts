import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile';
import { Profile } from './data/services/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }
}
