import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountsPayload } from './models/accountsPayload.model';
import { Account } from './models/account.model';

@Injectable()
export class AccountFormService {
  public get accounts(): Observable<AccountsPayload> {
    return of(this._accounts);
  }

  private selected: Account = {
    name: 'abandoned',
    id: 1,
    account: '888999888999',
  };

  private selectedRepaymentAccount: Account = {
    name: 'abandoned',
    id: 1,
    account: '888999888999',
  };

  private allAccounts: Account[] = [
    {
      name: 'hello',
      id: 0,
      account: '36124011968614604782052557',
    },
    {
      name: 'world',
      id: 1,
      account: '36123011968614604782053668',
    },
    {
      name: 'abandoned',
      id: 3,
      account: '888999888999',
    },
  ];

  private _accounts: AccountsPayload = {
    allAccounts: this.allAccounts,
    selectedAccount: {
      name: 'abandoned',
      id: 1,
      account: '888999888999',
    },
    additionalAccount: '666',
    selectedRepaymentAccount: this.selectedRepaymentAccount,
  };
}
