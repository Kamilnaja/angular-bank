import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclicListComponent } from './cyclic-list.component';

describe('CyclicListComponent', () => {
  let component: CyclicListComponent;
  let fixture: ComponentFixture<CyclicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
