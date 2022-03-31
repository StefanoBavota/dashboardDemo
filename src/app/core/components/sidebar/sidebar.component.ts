import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean = false;

  menuItems = [
    { linkIcon: 'house-door', linkName: 'Home', linkUrl: '/section/home' },
    { linkIcon: 'people', linkName: 'Clienti', linkUrl: '/section/client' },
    { linkIcon: 'geo-alt', linkName: 'Settori', linkUrl: '/section/area' },
    { linkIcon: 'grid', linkName: 'Società', linkUrl: '/section/society' },
    { linkIcon: 'piggy-bank', linkName: 'Pagamenti', linkUrl: '/section/payment' },
    { linkIcon: 'person-lines-fill', linkName: 'Utenti', linkUrl: '/section/user' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickLogo() {
  }
}
