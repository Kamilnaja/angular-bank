import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountFormService } from '../account-form/account-form.service';
import { AccountsPayload } from '../account-form/models/accountsPayload.model';

@Injectable({ providedIn: 'root' })
export class AccountFormResolver implements Resolve<AccountsPayload> {
  constructor(private service: AccountFormService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AccountsPayload> {
    return this.service.accounts;
  }
}
