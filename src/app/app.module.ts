import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { CoreModule } from './core/core.module';

// Routes
import { AppRoutingModule } from './app.routing.module';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/404/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
