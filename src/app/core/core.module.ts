import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [SharedModule, HttpClientModule, RouterModule],
  exports: [MenuComponent],
})
export class CoreModule {
  // Evita que el módulo se importe más de una vez
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) throw new Error('CoreModule ya está cargado. Importa solo en AppModule.');
  }
}
