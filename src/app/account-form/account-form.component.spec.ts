import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AccountFormComponent } from './account-form.component';
import { Account } from './models/account.model';
import { AccountsPayload } from './models/accountsPayload.model';

const allAccounts: Account[] = [
  {
    name: 'hello',
    id: 10,
    account: '36124011968614604782052557',
  },
  {
    name: 'world',
    id: 2,
    account: '36123011968614604782053668',
  },
  {
    name: 'abandoned',
    id: 3,
    account: '888999888999',
  },
];

const selected: Account = {
  name: 'abandoned',
  id: 1,
  account: '888999888999',
};

const additionalAccount = null;

const selectedRepaymentAccount: Account = {
  name: 'abandoned',
  id: 1,
  account: '888999888999',
};

const payAccountFull = {
  name: 'abandoned',
  id: 1,
  account: '888999888999',
};

const payAccountEmpty = {
  name: 'abandoned',
  id: null,
  account: '888999888999',
};

const _accounts: AccountsPayload = {
  allAccounts: allAccounts,
  selectedAccount: selected,
  additionalAccount: additionalAccount,
  selectedRepaymentAccount: selectedRepaymentAccount,
};

describe('AccountFormComponent', () => {
  let component: AccountFormComponent;
  let fixture: ComponentFixture<AccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: class {
            data = of({
              accounts: _accounts,
            });
          },
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
  });

  it('should have initialized form with given values when otherBank account is empty', async () => {
    _accounts.selectedAccount = payAccountFull;
    _accounts.additionalAccount = null;

    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(1);
    // activatedRoute = new ActivatedRouteStub(payAccountEmpty, '999');
  });

  it('should have initialized form with given values, when otherBank account is not empty', async () => {
    _accounts.selectedAccount = payAccountEmpty;
    _accounts.additionalAccount = '999';
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
    expect(component.additionalAccount.value).toBeTruthy();
    expect(component.additionalAccount.value).toBe('999');

    // activatedRoute = new ActivatedRouteStub(payAccountEmpty, null);
  });

  it('should have default value, when selected Account is empty', () => {
    _accounts.selectedAccount = payAccountEmpty;
    _accounts.additionalAccount = null;
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

    // activatedRoute = new ActivatedRouteStub(payAccountFull, null);
  });

  it('when the payment account is given from backend, other bank account field should be readonly', () => {
    _accounts.selectedAccount = payAccountFull;
    _accounts.additionalAccount = null;
    component.ngOnInit();
    expect(component.additionalAccount.value).toBe(null);
    expect(component.additionalAccount.disabled).toBe(true);
  });

  it('when paymentAccount have value from backend, set value for repayment', () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(1);
    expect(component.repaymentAccount.value).toBe(1);
    expect(component.additionalAccount.disabled).toBeTruthy();
    // activatedRoute = new ActivatedRouteStub(payAccountEmpty, null);
  });

  it('when paymentAccount do not have value from backend, do not set initial value for repayment', () => {
    _accounts.selectedAccount = payAccountEmpty;
    _accounts.additionalAccount = null;
    component.ngOnInit();
    expect(component.paymentAccount.value).toBe(null);
    expect(component.repaymentAccount.value).toBe(null);
    expect(component.additionalAccount.disabled).toBeFalsy();
  });

  it('when paymentAccount have value "submit", enable other account form ', () => {
    component.ngOnInit();
    component.paymentAccount.setValue('select');
    expect(component.additionalAccount.disabled).toBeFalsy();
    // activatedRoute = new ActivatedRouteStub(payAccountEmpty, '999000999');
  });

  it('additional form should value from backend and set it into control', () => {
    _accounts.selectedAccount = payAccountEmpty;
    _accounts.additionalAccount = '999000999';

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.additionalAccount.value).toBe('999000999');
    expect(component.additionalAccount.valid).toBeTruthy();
    expect(component.paymentAccount.disabled).toBeTruthy();
    expect(component.paymentAccount.value).toBeFalsy();
  });
});
