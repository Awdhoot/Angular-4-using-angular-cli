import {Component, OnInit} from '@angular/core';
import {HttpserviceService} from '../httpservice.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero> = [];
  heroName = '';

  constructor(private httpService: HttpserviceService) {

  }

  ngOnInit() {
  }

  sayHello() {
    console.log('hello');
  }

  getHeroes() {
    this.httpService.loadHeroes()
      .subscribe((response: any) => {
        console.log('Got heroes -> ', response);
        this.heroes = response.heroes;
      });
  }

  addHero() {
    const newHero = {
      name: this.heroName,
      id: this.heroes.length
    };
    this.httpService.addHero(newHero).subscribe(
      () => {
        console.log('success!!!');
      },
      (error: any) => console.log('error!!!', error), () => {
      })
  }

}
