import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean = false;
  pathName: string = '';

  menuItems = [
    { linkIcon: 'house-door', linkName: 'Home', linkUrl: '' },
    { linkIcon: 'people', linkName: 'Clienti', linkUrl: 'client' },
    { linkIcon: 'geo-alt', linkName: 'Settori', linkUrl: 'area' },
    { linkIcon: 'grid', linkName: 'Società', linkUrl: 'society' },
    { linkIcon: 'piggy-bank', linkName: 'Pagamenti', linkUrl: 'payment' },
    { linkIcon: 'person-lines-fill', linkName: 'Utenti', linkUrl: 'user' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  refreshLink(url: string) {
    this.pathName = url;
    this.router.navigate([url])
  }
}
