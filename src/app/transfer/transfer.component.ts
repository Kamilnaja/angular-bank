import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem.interface';

@Component({
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  menuItems: MenuItem[] = [
    { name: 'Wykonaj przelew jednorazowy', route: 'onetimeTransfer' },
    { name: 'Wykonaj przelew cykliczny', route: 'cyclicTransfer' },
    { name: 'Lista przelewów cyklicznych', route: 'cyclicListTransfer' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
