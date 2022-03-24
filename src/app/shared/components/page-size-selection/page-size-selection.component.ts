import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-size-selection',
  templateUrl: './page-size-selection.component.html',
  styleUrls: ['./page-size-selection.component.scss']
})
export class PageSizeSelectionComponent implements OnInit {

  @Input() actualSize: number = 10;
  @Output() sizeEmitter = new EventEmitter<number>();

  sizes: number[] = [10, 20, 50, 100];
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickShow() {
    this.show = !this.show;
  }

  onClick(size: number) {
    if(size !== this.actualSize) {
      console.log('on click size', size);
      this.sizeEmitter.emit(size);
    }
  }

}
