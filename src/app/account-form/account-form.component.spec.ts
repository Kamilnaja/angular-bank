import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountFormComponent } from './account-form.component';
import { ActivatedRouteStub } from './activatedServiceStub';

describe('AccountFormComponent', () => {
  let component: AccountFormComponent;
  let fixture: ComponentFixture<AccountFormComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AccountFormComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
    activatedRoute = new ActivatedRouteStub({
      id: 1,
      account: '',
      name: '',
    });
  });

  it('should have initialized form with given values', async () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeDefined();
    expect(component.paymentAccount.value).toBe(1);
    activatedRoute = new ActivatedRouteStub({
      id: null,
      account: '',
      name: '',
    });
  });

  it('should have default value, when selected Account is empty', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
  });

  it('when the user change payment account, and repayment account is empty, repayment account should change to the same value', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
    expect(component.repaymentAccount.value).toBeFalsy();
    component.paymentAccount.setValue(1);
    fixture.detectChanges();
    console.log(JSON.stringify(component.formGroup.value));

    // expect(component.repaymentAccount.value).toBe(1);

  });

  it('when the payment account is given from backend, other bank account field should be readonly', () => {
    activatedRoute = new ActivatedRouteStub({
      id: 1,
      account: '',
      name: '',
    });
  });

  it('when paymentAccount have value from backend, set value for repayment', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(1);
    expect(component.repaymentAccount.value).toBe(1);
  })
});
