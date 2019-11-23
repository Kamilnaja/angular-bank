import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountFormComponent } from './account-form.component';
import { ActivatedRouteStub } from './activatedServiceStub.component';

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

    activatedRoute = new ActivatedRouteStub();

    fixture = TestBed.createComponent(AccountFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have initialized form with given values', async () => {
    component.ngOnInit();
    expect(component.paymentAccount.value).toBeDefined();
    expect(component.paymentAccount.value).toBe(1);
  });
});
