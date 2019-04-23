import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map } from "rxjs/operators";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  textInputs$ : Subject<string>;
  inputValues : string[] = [];
  constructor() { }

  ngOnInit() {
    this.textInputs$ = new Subject<string>();
    this.textInputs$
    .pipe(debounceTime(600))
    .pipe(map(val => val.trim()))
    .pipe(distinctUntilChanged())
    .pipe(filter(val => val.length > 0))
    .subscribe(val=> {
      console.log("from observable in parent: " + val);
      this.inputValues.push(val);
    });
  }

  // logTextInput (val) {
  //   console.log("inside parent:" + val);
  // }
}
