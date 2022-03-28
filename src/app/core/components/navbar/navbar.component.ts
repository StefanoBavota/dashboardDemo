import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  sideShow: boolean= false;
  @Output() openSide: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onShow() {
    this.show = !this.show;
  }

  onOpenSide() {
    this.sideShow = !this.sideShow
    this.openSide.emit(this.sideShow)
  }

  onLogout() {
    console.log("logout")
    this.show = !this.show;
  }

  onProfileClick() {
    this.router.navigate(["profile"])
    this.show = !this.show;
  }
}