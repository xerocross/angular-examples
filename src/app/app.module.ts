import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SequenceExplorerComponent } from './sequence-explorer/sequence-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    SequenceExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
