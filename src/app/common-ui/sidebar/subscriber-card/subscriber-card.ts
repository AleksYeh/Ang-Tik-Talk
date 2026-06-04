import { Component, Input } from '@angular/core';
import { Profile } from '../../../data/services/interfaces/profile.interface';
import { ImgUrlPipe } from '../../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.html',
  styleUrl: './subscriber-card.scss',
})
export class SubscriberCard {
  @Input() profile!: Profile;
}
