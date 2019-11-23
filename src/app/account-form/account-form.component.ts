import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit {
  public formGroup: FormGroup;

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

  ngOnInit(): void {
    this.buildFormGroup();
    this.getInitialData();
  }

  getInitialData(): void {
    this.route.data.subscribe(data => {
      this.setInitialFormValues(data.accounts.selectedAccount.id);
    });
  }

  private setInitialFormValues(data: number): void {
    this.paymentAccount.setValue(data);
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      paymentAccount: [''],
      repaymentAccount: [''],
      additionalAccount: [''],
    });
  }
}
