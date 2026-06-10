import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/404/not-found.component';

export const globalRoutes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule),
  },

  {
    path: 'games',
    loadChildren: () => import('./pages/games/games.module').then(m => m.GamesModule),
  },

  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
  },

  {
    path: 'devices',
    loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesModule),
  },

  {
    path: '404',
    component: NotFoundComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },

  {
    path: '**',
    redirectTo: '404',
  },
];
