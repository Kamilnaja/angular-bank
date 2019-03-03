import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OneTimeTransferComponent} from './one-time-transfer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TransferOptionCardComponent} from './transfer-option-card/transfer-option-card.component';
import {TooltipDirective} from '../../tooltip.directive';

describe('OneTimeTransferComponent', () => {
  let component: OneTimeTransferComponent;
  let fixture: ComponentFixture<OneTimeTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OneTimeTransferComponent, TransferOptionCardComponent, TooltipDirective],
      imports: [ReactiveFormsModule]
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
