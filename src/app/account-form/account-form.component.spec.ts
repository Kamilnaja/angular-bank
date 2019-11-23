import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountFormComponent } from './account-form.component';
import { ActivatedRouteStub } from './activatedServiceStub';

describe('AccountFormComponent', () => {
  let component: AccountFormComponent;
  let fixture: ComponentFixture<AccountFormComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRoute,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AccountFormComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
    activatedRoute = new ActivatedRouteStub({
      id: 1,
      account: '',
      name: '',
    });
  });

  it('should have initialized form with given values', async () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeDefined();
    expect(component.paymentAccount.value).toBe(1);
    activatedRoute = new ActivatedRouteStub({
      id: 0,
      account: '',
      name: '',
    });
  });

  it('should have default value, when selected Account is empty', () => {
    component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeFalsy();
  });
});
