import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show: boolean = false;
  sideShow: boolean= false;
  @Output() openSide: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onShow() {
    console.log("here", this.show)
    this.show = !this.show;
  }

  onOpenSide() {
    this.sideShow = !this.sideShow
    this.openSide.emit(this.sideShow)
  }
}
