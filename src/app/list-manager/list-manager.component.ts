import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  textInputs$ : Subject<string>;

  constructor() { }

  ngOnInit() {
    this.textInputs$ = new Subject<string>();
    this.textInputs$.subscribe(val=> {
      console.log("from observable in parent: " + val);
    });
  }

  // logTextInput (val) {
  //   console.log("inside parent:" + val);
  // }
}
