import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransferOptionCardComponent} from './transfer-option-card.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('TransferOptionCardComponent', () => {
  let component: TransferOptionCardComponent;
  let fixture: ComponentFixture<TransferOptionCardComponent>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransferOptionCardComponent],
      providers: [{provide: FormBuilder, useValue: formBuilder}],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]

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
