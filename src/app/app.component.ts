import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data = ['Apple', 'Oranges', 'Banana', 'PineApple'];
  hello = 'WORLD';

  changeArray(){
    this.data.push('Mango');
    this.data = this.data.slice()
  }

  handleIt(value: any) {
    console.log('value -> ', value);
  }

}
