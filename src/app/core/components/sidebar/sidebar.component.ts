import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems = [
    { linkIcon: 'house-door', linkName: 'Home', linkUrl: '' },
    { linkIcon: 'people', linkName: 'Clienti', linkUrl: 'client' },
    { linkIcon: 'geo-alt', linkName: 'Settori', linkUrl: 'area' },
    { linkIcon: 'grid', linkName: 'Società', linkUrl: 'society' },
    { linkIcon: 'piggy-bank', linkName: 'Pagamenti', linkUrl: 'payment' },
    { linkIcon: 'person-lines-fill', linkName: 'Utenti', linkUrl: 'user' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
