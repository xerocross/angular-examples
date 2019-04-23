import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    ListManagerComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
