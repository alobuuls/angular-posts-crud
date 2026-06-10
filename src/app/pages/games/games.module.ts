import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { GamesComponent } from './games.component';
import { GamesDetailComponent } from './detail/games-detail.component';
import { GamesCreateComponent } from './create/games-create.component';
import { GamesEditComponent } from './edit/games-edit.component';

const gamesRoutes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },

  {
    path: 'detail/:id',
    component: GamesDetailComponent,
  },

  {
    path: 'create',
    component: GamesCreateComponent,
  },

  {
    path: 'edit/:id',
    component: GamesEditComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [GamesComponent, GamesDetailComponent, GamesCreateComponent, GamesEditComponent],
  imports: [SharedModule, RouterModule.forChild(gamesRoutes)],
})
export class GamesModule {}
