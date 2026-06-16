import { Component, inject } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { NgFor } from '@angular/common';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile';
import { AsyncPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-sidebar',
  imports: [ImgUrlPipe, SvgIcon, NgFor, SubscriberCard, RouterLink, AsyncPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  profileSevice = inject(ProfileService);

  subscribers$ = this.profileSevice.getSubscribersShortList();

  me = this.profileSevice.me;

  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileSevice.getMe());
  }
}
