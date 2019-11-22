import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TransferOptionCardComponent} from './transfer-option-card.component';
import {FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TransferOptionCardComponent', () => {
  let component: TransferOptionCardComponent;
  let fixture: ComponentFixture<TransferOptionCardComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TransferOptionCardComponent,
      ],
      providers: [{provide: FormBuilder, useValue: formBuilder}],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOptionCardComponent);
    component = fixture.componentInstance;
    component.options = new FormGroup({
      kind: new FormControl(''),
      title: new FormControl('')
    });

    component.transfer = new FormGroup({
      title: new FormControl(''),
      data: new FormControl(''),
      price: new FormControl('')
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
