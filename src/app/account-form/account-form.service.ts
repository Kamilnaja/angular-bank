import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountsPayload } from './models/accountsPayload.model';

@Injectable()
export class AccountFormService {
  public get accounts(): Observable<AccountsPayload> {
    return of(this._accounts);
  }
  // todo - move to json file
  private selected = {
    name: 'abandoned',
    id: 1,
    account: '888999888999',
  };

  private all = [
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
    allAccounts: this.all,
    selectedAccount: this.selected
  };
  constructor() {}
}
