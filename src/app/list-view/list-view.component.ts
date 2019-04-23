import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
})
export class ListViewComponent {
  @Input() theList: string[];
}
