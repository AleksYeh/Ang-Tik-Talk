import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { SearchPage } from './pages/search-page/search-page';
import { ProfilePage } from './pages/profile-page/profile-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'profile', component: ProfilePage },
  { path: '', component: SearchPage },
];
