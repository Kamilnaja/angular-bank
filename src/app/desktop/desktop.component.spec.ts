import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DesktopComponent } from './desktop.component';
import { AccountFormComponent } from '../account-form/account-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccountFormService } from '../account-form/account-form.service';

describe('DesktopComponent', () => {
  let component: DesktopComponent;
  let fixture: ComponentFixture<DesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesktopComponent],
      imports: [ReactiveFormsModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
