import { of } from 'rxjs';
import { Account } from './models/account.model';
import { AccountsPayload } from './models/accountsPayload.model';

export class ActivatedRouteStub {
  public selectedAccount: Account;
  public additionalAccount: string;
  public selectedRepaymentAccount: Account;
  constructor(account: Account, additionalAccount: string) {
    this.accounts.selectedAccount = account;
    this.accounts.additionalAccount = additionalAccount;
    this.accounts.selectedRepaymentAccount = this.selectedRepaymentAccount;
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
    additionalAccount: this.additionalAccount,
    selectedRepaymentAccount: this.selectedRepaymentAccount,
  };

  public data = of({
    accounts: this.accounts,
  });
}
