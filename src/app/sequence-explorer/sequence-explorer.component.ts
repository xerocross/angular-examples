import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { observable, computed } from "mobx-angular";


@Component({
  selector: 'app-sequence-explorer',
  templateUrl: './sequence-explorer.component.html',
  styleUrls: ['./sequence-explorer.component.scss']
})
export class SequenceExplorerComponent {

  @observable sequenceInput : string = "";
  @observable otherVal : string = "";

  @computed get numberArray (): number[] {
    console.log("numberArray");
    return this.sequenceInput.split(/ *, */).map(v=> parseInt(v)).filter(v=> !isNaN(v));
  }
  @computed get ratios (): number[] {
    console.log("ratioArray");
    let ratios = [];
    for (let i = 0; i < this.numberArray.length - 1; i++) {
      ratios.push(this.numberArray[i+1] / this.numberArray[i]);
    }
    return ratios;
  }
  @computed get differences (): number[] {
    console.log("differences");
    let differences = [];
    for (let i = 0; i < this.numberArray.length - 1; i++) {
      differences.push(this.numberArray[i+1] - this.numberArray[i]);
    }
    return differences;
  }

}
