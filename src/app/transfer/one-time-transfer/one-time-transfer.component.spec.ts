import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OneTimeTransferComponent} from './one-time-transfer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OneTimeTransferComponent', () => {
  let component: OneTimeTransferComponent;
  let fixture: ComponentFixture<OneTimeTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OneTimeTransferComponent,
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
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
