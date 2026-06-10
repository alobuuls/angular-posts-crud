import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { DevicesComponent } from './devices.component';
import { DevicesDetailComponent } from './detail/devices-detail.component';
import { DevicesCreateComponent } from './create/devices-create.component';
import { DevicesEditComponent } from './edit/devices-edit.component';
import { DevicesListComponent } from './list/devices-list.component';

const devicesRoutes: Routes = [
  {
    path: '',
    component: DevicesComponent,
    children: [
      {
        path: 'list',
        component: DevicesListComponent,
      },
      {
        path: 'detail/:id',
        component: DevicesDetailComponent,
      },

      {
        path: 'create',
        component: DevicesCreateComponent,
      },

      {
        path: 'edit/:id',
        component: DevicesEditComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesDetailComponent,
    DevicesCreateComponent,
    DevicesEditComponent,
    DevicesListComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(devicesRoutes)],
})
export class DevicesModule {}
