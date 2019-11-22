import { Component, OnInit } from '@angular/core';
import { AccountFormService } from './account-form.service';
import { FormGroup, FormBuilder, ɵangular_packages_forms_forms_bg } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private accountFormService: AccountFormService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildFormGroup();
  }

  private buildFormGroup(): void {
    this.formGroup = this.fb.group({
      paymentAccount: this.fb.control,
      repaymentAccount: this.fb.control,
      additionalAccount: this.fb.control,
    });
  }

}
