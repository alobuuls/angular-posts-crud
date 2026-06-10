import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { MoviesDetailComponent } from './detail/movies-detail.component';
import { MoviesCreateComponent } from './create/movies-create.component';
import { MoviesEditComponent } from './edit/movies-edit.component';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './list/movies-list.component';

const moviesRoutes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },

  {
    path: 'detail/:id',
    component: MoviesDetailComponent,
  },

  {
    path: 'create',
    component: MoviesCreateComponent,
  },

  {
    path: 'edit/:id',
    component: MoviesEditComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [MoviesComponent, MoviesListComponent, MoviesDetailComponent, MoviesCreateComponent, MoviesEditComponent],
  imports: [SharedModule, RouterModule.forChild(moviesRoutes)],
})
export class MoviesModule {}
