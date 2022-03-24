import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { generateButtons, PaginationButton } from './pagination';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  @Input() totalPages: number = 1;
  @Input() actualPage: number = 1;
  @Output() clickEvent = new EventEmitter<number>();

  buttons: PaginationButton[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('pippo')
    this.buttons = generateButtons(this.totalPages, this.actualPage);
    console.log('geremia', this.buttons)
  }

  onClick(index: number) {
    console.log('on click', index);
    if(index !== 0) {
      this.clickEvent.emit(index);
    }
  }

}
