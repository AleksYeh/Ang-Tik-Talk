import { Component } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon';
import { NgFor } from '@angular/common';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, NgFor, SubscriberCard, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
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
