import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesExplorerComponent } from './series-explorer.component';

describe('SeriesExplorerComponent', () => {
  let component: SeriesExplorerComponent;
  let fixture: ComponentFixture<SeriesExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
