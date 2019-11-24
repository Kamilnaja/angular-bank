import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountFormComponent } from './account-form.component';
import { ActivatedRouteStub } from './activatedServiceStub';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
const payAccountFull = {
  id: 1,
  account: '',
  name: '',
};

const payAccountEmpty = {
  id: null,
  account: '',
  name: '',
};

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
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AccountFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    activatedRoute = new ActivatedRouteStub(payAccountFull, null);
  });

  it('should have initialized form with given values when otherBank account is empty', async () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(1);
    activatedRoute = new ActivatedRouteStub(payAccountEmpty, '999');
  });

  it('should have initialized form with given values, when otherBank account is not empty', async () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
    expect(component.additionalAccount.value).toBeTruthy();
    expect(component.additionalAccount.value).toBe('999');

    activatedRoute = new ActivatedRouteStub(payAccountEmpty, null);
  });

  it('should have default value, when selected Account is empty', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
  });

  it('when the user change payment account, and repayment account is empty, repayment account should change to the same value', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
    expect(component.repaymentAccount.value).toBeFalsy();
    component.paymentAccount.setValue(1, { emitEvent: true });
    fixture.detectChanges();
    expect(component.repaymentAccount.value).toBe(1);
    // now repayment is not empty, retry
    component.paymentAccount.setValue(2, { emitEvent: true });
    expect(component.repaymentAccount.value).toBe(1);

    activatedRoute = new ActivatedRouteStub(payAccountFull, null);
  });

  it('when the payment account is given from backend, other bank account field should be readonly', () => {
    component.ngOnInit();
    expect(component.additionalAccount.value).toBe(null);
    expect(component.additionalAccount.disabled).toBe(true);
  });

  it('when paymentAccount have value from backend, set value for repayment', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(1);
    expect(component.repaymentAccount.value).toBe(1);
    expect(component.additionalAccount.disabled).toBeTruthy();
    activatedRoute = new ActivatedRouteStub(payAccountEmpty, null);
  });

  it('when paymentAccount do not have value from backend, do not set initial value for repayment', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(null);
    expect(component.repaymentAccount.value).toBe(null);
    expect(component.additionalAccount.disabled).toBeFalsy();
  });

  it('when paymentAccount have value "submit", enable other account form ', () => {
    component.ngOnInit();
    component.paymentAccount.setValue('select');
    expect(component.additionalAccount.disabled).toBeFalsy();
    activatedRoute = new ActivatedRouteStub(payAccountEmpty, '999000999');
  });

  it('additional form should value from backend and set it into control', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.additionalAccount.value).toBe('999000999');
    expect(component.additionalAccount.valid).toBeTruthy();
    expect(component.paymentAccount.disabled).toBeTruthy();
    expect(component.paymentAccount.value).toBeFalsy();
  });


});
