import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';
import { ProfileFilters } from './profile-filters/profile-filters';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard, ProfileFilters],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {
  private readonly profileService = inject(ProfileService);
  profiles = this.profileService.filteredProfiles;

  constructor() {}
}
