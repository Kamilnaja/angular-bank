import { Injectable } from '@angular/core';
import { Account } from './account.model';

@Injectable()
export class AccountFormService {

  public get accounts(): Account[] {
    return this._accounts;
  }

  public set accounts(value: Account[]) {
    this._accounts = value;
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

  constructor() { }
}