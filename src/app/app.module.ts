import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { HomemapComponent } from './homemap/homemap.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    HomemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng4GeoautocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'jjj',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
