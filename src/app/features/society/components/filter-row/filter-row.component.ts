import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.scss']
})
export class FilterRowComponent implements OnInit {

  @Input() pageSize: number = 10;
  @Output() pageSizeEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  onChangePageSize(size: number) {
    this.pageSizeEmitter.emit(size);
  }
}
