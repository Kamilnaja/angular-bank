import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { AccountsPayload } from './models/accountsPayload.model';
import { Account } from './models/account.model';

export class ActivatedRouteStub {
  public selectedAccount: Account;
  constructor(account: Account) {
    this.accounts.selectedAccount = account;
  }

  private allAccounts: Account[] = [
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

  public accounts: AccountsPayload = {
    selectedAccount: this.selectedAccount,
    allAccounts: this.allAccounts,
  };

  private subject = new ReplaySubject<ParamMap>();

  public data = of({
    accounts: this.accounts,
  });

  setParamsMap(initialParams?: Params) {
    this.subject.next(convertToParamMap(initialParams));
  }
}
