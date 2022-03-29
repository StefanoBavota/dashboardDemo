import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  selectedOption: string = '';

  options = [
    { name: 'option1', value: 1 },
    { name: 'option2', value: 2 },
    { name: 'option3', value: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}

  print() {
    console.log(this.selectedOption);
  }
}
