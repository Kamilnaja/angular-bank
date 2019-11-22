import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountFormComponent } from './account-form.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AccountFormService } from './account-form.service';
import { DebugElement } from '@angular/core';

describe('AccountFormComponent', () => {
  let component: AccountFormComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    component = new AccountFormComponent(new FormBuilder());
  });

  afterEach(() => {
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
