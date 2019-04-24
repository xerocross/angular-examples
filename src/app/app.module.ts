import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MobxAngularModule } from "mobx-angular";
import { SequenceExplorerComponent } from './sequence-explorer/sequence-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    SequenceExplorerComponent
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
