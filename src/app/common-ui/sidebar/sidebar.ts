import { Component, inject } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { NgFor } from '@angular/common';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile';
import { AsyncPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [JsonPipe, SvgIcon, NgFor, SubscriberCard, RouterLink, AsyncPipe],
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
      link: '',
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
}
