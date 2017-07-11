import {Component, ViewChild} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild(HeroesComponent) heroComponent: HeroesComponent;

  constructor() {
    //console.log(this.heroComponent.sayHello());
  }

  ngOnInit() {
    console.log('onInit');
    this.heroComponent.sayHello()
  }

  ngAfterViewInit() {
    console.log('inside AfterViewInit');
    this.heroComponent.sayHello();
  }

}
