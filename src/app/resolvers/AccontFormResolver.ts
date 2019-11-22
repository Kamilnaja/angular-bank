import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountFormService } from '../account-form/account-form.service';

@Injectable({ providedIn: 'root' })
export class AccountFormResolver implements Resolve<string> {
  constructor(private service: AccountFormService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> {
    return this.service.singleAccount;
  }
}
