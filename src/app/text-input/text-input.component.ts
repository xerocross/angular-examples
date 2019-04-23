import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  inputTextControl : FormControl;
  @Output() textInputEmitter =  new EventEmitter<string>();

  ngOnInit() {
    this.inputTextControl = new FormControl();

    this.inputTextControl.valueChanges
      .subscribe(val => {
        // console.log(val);
        this.textInputEmitter.emit(val);
      });
  }
}
