import { Component, OnInit } from '@angular/core';
import { AccountFormService } from './account-form.service';
import { FormGroup, FormBuilder, ɵangular_packages_forms_forms_bg, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildFormGroup();
    this.setInitialFormValues();
  }

  private setInitialFormValues(): void {

  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      paymentAccount: [''],
      repaymentAccount: [''],
      additionalAccount: [],
    });
  }
}
