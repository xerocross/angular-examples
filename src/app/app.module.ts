import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeriesExplorerComponent } from './series-explorer/series-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
