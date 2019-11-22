import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class AccountFormService {

  public get accounts(): Account[] {
    return this._accounts;
  }

  public set accounts(value: Account[]) {
    this._accounts = value;
  }

  public get singleAccount(): Observable<string> {
    return of(this._singleAccount);
  }

  private _accounts: Account[] = [
    {
      name: 'hello',
      id: 1,
      account: '36124011968614604782052557'
    },
    {
      name: 'world',
      id: 2,
      account: '36123011968614604782053668'
    }
  ];

  private _singleAccount = '36123011968614604782053668';

  constructor() { }
}
