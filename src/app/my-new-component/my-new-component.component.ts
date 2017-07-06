import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss']
})
export class MyNewComponentComponent implements OnInit {
  data: Array<string> = [];
  test: any = 'asd';
  constructor() {
    this.data = ['Apple', 'Oranges', 'Banana', 'PineApple'];
  }

  ngOnInit() {
  }

}
