import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { SeriesExplorerComponent } from './series-explorer/series-explorer.component';
import { MobxAngularModule } from "mobx-angular";

@NgModule({
  declarations: [
    AppComponent,
    SeriesExplorerComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, MobxAngularModule
  ],
  exports : [
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
