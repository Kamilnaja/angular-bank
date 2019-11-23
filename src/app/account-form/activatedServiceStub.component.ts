import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { AccountsPayload } from './models/accountsPayload.model';

export class ActivatedRouteStub {
  constructor(initialParams?: Params) {
    this.setParamsMap(initialParams);
  }
  public params: any;
  public accounts: AccountsPayload = {
    selectedAccount: {
      name: 'hello',
      id: 1,
      account: '36124011968614604782052557',
    },
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
  };

  private subject = new ReplaySubject<ParamMap>();
  public data = of({
    accounts: this.accounts,
  });

  setParamsMap(initialParams?: Params) {
    this.subject.next(convertToParamMap(initialParams));
  }
}
