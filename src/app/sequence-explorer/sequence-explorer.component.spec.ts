import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceExplorerComponent } from './sequence-explorer.component';

describe('SequenceExplorerComponent', () => {
  let component: SequenceExplorerComponent;
  let fixture: ComponentFixture<SequenceExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
