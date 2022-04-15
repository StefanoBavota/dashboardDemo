import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  sideShow: boolean = false;
  @Output() openSide: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onShow() {
    this.show = !this.show;
  }

  onOpenSide() {
    this.sideShow = !this.sideShow;
    this.openSide.emit(this.sideShow);
  }

  onLogout() {
    this.show = !this.show;
    localStorage.removeItem('sports-board');
    this.authService.setToken("");
    this.router.navigate(['/login']);
  }

  onProfileClick() {
    this.show = !this.show;
    this.router.navigate(['/section/profile']);
  }
}
