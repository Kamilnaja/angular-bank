import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OneTimeTransferComponent} from './one-time-transfer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
      ]
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
