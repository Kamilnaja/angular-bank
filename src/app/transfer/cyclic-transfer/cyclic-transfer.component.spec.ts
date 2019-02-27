import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclicTransferComponent } from './cyclic-transfer.component';

describe('CyclicTransferComponent', () => {
  let component: CyclicTransferComponent;
  let fixture: ComponentFixture<CyclicTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclicTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclicTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
