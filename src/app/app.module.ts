import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
