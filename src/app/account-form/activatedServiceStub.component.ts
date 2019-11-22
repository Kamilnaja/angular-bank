import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { ReplaySubject, of, Observable } from 'rxjs';

export class ActivatedRouteStub {
  constructor(initialParams?: Params) {
    this.setParamsMap(initialParams);
    this.params = of({ account: 'super' });
  }
  public params: any;
  private subject = new ReplaySubject<ParamMap>();
  public data = of({
    account: 'hello'
  });
  public snapshot = {
    data: {},
  };
  setParamsMap(initialParams?: Params) {
    this.subject.next(convertToParamMap(initialParams));
  }
}
