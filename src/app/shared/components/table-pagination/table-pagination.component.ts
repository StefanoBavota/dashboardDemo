import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { generateButtons, PaginationButton } from './pagination';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit, OnChanges {

  @Input() totalPages: number = 1;
  @Input() actualPage: number = 1;
  @Output() clickEvent = new EventEmitter<number>();

  buttons: PaginationButton[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buttons = generateButtons(this.totalPages, this.actualPage);
  }

  ngOnChanges() {
    this.buttons = generateButtons(this.totalPages, this.actualPage);
  }

  onClick(index: number) {
    if(index !== 0) {
      this.clickEvent.emit(index);
    }
  }

}
