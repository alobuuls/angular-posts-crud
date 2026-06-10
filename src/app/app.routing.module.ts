import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { globalRoutes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(globalRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
