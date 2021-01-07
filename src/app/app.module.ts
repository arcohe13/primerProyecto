import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { FirstservicioService } from './firstservicio.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirstservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
