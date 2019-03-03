import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainNavbarComponent} from './main-navbar.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainNavbarComponent', () => {
  let component: MainNavbarComponent;
  let fixture: ComponentFixture<MainNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavbarComponent],
      imports: [RouterModule, RouterTestingModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
