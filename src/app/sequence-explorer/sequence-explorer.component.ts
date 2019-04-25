import { Component } from '@angular/core';

@Component({
  selector: 'app-sequence-explorer',
  templateUrl: './sequence-explorer.component.html',
  styleUrls: ['./sequence-explorer.component.scss']
})
export class SequenceExplorerComponent /* implements OnInit */ {
  mySequenceString : string = "";
  _mySequence : number[];

  // constructor() { }
  // ngOnInit() {
  // }

  // this function will basically just ignore 
  // anything that isn't a number or a comma
  processSequenceString (val): void {
    let arr = val.split(/ *, */g) 
    .map((v: string) => parseFloat(v)) 
    .filter((v:number) => !isNaN(v));
    console.log(arr);
    this._mySequence = arr;
  }
}
