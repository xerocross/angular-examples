import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MobxAngularModule } from "mobx-angular";
import { SequenceExplorerComponent } from './sequence-explorer/sequence-explorer.component';
import { MyTestDirectiveDirective } from './my-test-directive.directive';
import { MyMobXTestDirective } from './my-mob-xtest.directive';

@NgModule({
  declarations: [
    AppComponent,
    SequenceExplorerComponent,
    MyTestDirectiveDirective,
    MyMobXTestDirective
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
