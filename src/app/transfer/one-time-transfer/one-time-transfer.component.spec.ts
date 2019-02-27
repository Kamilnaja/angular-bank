import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeTransferComponent } from './one-time-transfer.component';

describe('OneTimeTransferComponent', () => {
  let component: OneTimeTransferComponent;
  let fixture: ComponentFixture<OneTimeTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTimeTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
