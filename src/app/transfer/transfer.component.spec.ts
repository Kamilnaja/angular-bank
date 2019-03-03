import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransferComponent} from './transfer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
