import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { startWith } from 'rxjs/operators';
import { AccountsPayload } from './models/accountsPayload.model';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { isNil } from 'lodash';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit, OnDestroy {
  public get paymentAccount(): FormControl {
    return this.formGroup.get('paymentAccount') as FormControl;
  }

  public get repaymentAccount(): FormControl {
    return this.formGroup.get('repaymentAccount') as FormControl;
  }

  public get additionalAccount(): FormControl {
    return this.formGroup.get('additionalAccount') as FormControl;
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}
  public formGroup: FormGroup;
  public allAccounts: AccountsPayload;

  ngOnInit(): void {
    this.buildFormGroup();
    this.getInitialData();
    this.watchPaymentAccountchanges();
  }

  ngOnDestroy(): void {}

  private watchPaymentAccountchanges() {
    this.paymentAccount.valueChanges
      .pipe(startWith(this.paymentAccount.value), untilDestroyed(this))
      .subscribe((item: string | number) => {
        if (
          (isNil(this.repaymentAccount.value) ||
          this.repaymentAccount.value === '') && !isNil(this.paymentAccount)
        ) {
          this.repaymentAccount.setValue(item);
        }

        if (
          (item || (item === 0)) &&
          !this.additionalAccount.value &&
          this.additionalAccount.value !== 0
        ) {
          this.additionalAccount.disable();
        }
        if (item === 'select') {
          this.additionalAccount.enable();
        }
      });
  }

  private getInitialData(): void {
    this.route.data.pipe(untilDestroyed(this)).subscribe(data => {
      this.setInitialFormValues(data.accounts.selectedAccount.id);
      this.allAccounts = data.accounts.allAccounts;
      this.additionalAccount.setValue(data.accounts.additionalAccount);
      if (!isNil(this.additionalAccount.value) ) {
        this.paymentAccount.setValue('');
        this.paymentAccount.disable();
      }
    });
  }

  private setInitialFormValues(selectedAccountId: number): void {
    this.paymentAccount.setValue(selectedAccountId);
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      paymentAccount: [''],
      repaymentAccount: [''],
      additionalAccount: [''],
    });
  }
}
