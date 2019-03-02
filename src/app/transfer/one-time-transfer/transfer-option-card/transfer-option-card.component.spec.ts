import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransferOptionCardComponent} from './transfer-option-card.component';

describe('TransferOptionCardComponent', () => {
  let component: TransferOptionCardComponent;
  let fixture: ComponentFixture<TransferOptionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferOptionCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
