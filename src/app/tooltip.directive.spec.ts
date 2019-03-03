import {TooltipDirective} from './tooltip.directive';
import {TestBed} from '@angular/core/testing';
import {OneTimeTransferComponent} from './transfer/one-time-transfer/one-time-transfer.component';

describe('TooltipDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        TooltipDirective,
        OneTimeTransferComponent
      ]
    });
  });
  it('should create an instance', () => {
    const directive = new TooltipDirective();
    expect(directive).toBeTruthy();
  });
});
