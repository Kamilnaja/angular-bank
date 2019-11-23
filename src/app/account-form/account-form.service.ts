import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountsPayload } from './models/accountsPayload.model';

@Injectable()
export class AccountFormService {
  public get accounts(): Observable<AccountsPayload> {
    return of(this._accounts);
  }
  // todo - move to json file
  private _accounts: AccountsPayload = {
    allAccounts: [
      {
        name: 'hello',
        id: 1,
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
    ],
    selectedAccount: {
      name: 'abandoned',
      id: 3,
      account: '888999888999',
    },
  };
  constructor() {}
}
