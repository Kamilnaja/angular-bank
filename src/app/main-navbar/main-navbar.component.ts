import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem.interface';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'pulpit', route: 'pulpit' },
    { name: 'przelew', route: 'przelew' },
    { name: 'historia', route: 'historia' }
  ];

  constructor() { }

  ngOnInit() { }
}
