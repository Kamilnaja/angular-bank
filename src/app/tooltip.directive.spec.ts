import {TooltipDirective} from './tooltip.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OneTimeTransferComponent} from './transfer/one-time-transfer/one-time-transfer.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('TooltipDirective', () => {
  let component: OneTimeTransferComponent;
  let fixture: ComponentFixture<OneTimeTransferComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        TooltipDirective,
        OneTimeTransferComponent
      ]
    });
    fixture = TestBed.createComponent(OneTimeTransferComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });
});
//todo - add tests
