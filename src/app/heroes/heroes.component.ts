import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero> = [];
  newHero: string;
  visible: boolean;
  heroError: boolean;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log('data => ', data);
    });
    this.heroError = false;
    this.newHero = '';
    this.visible = false;
    this.heroes = this.heroService.heroes;
  }


  addHero(heroName: string) {
    const heroPresent = this.heroes.find((hero: Hero) => hero.name === heroName);
    if (heroPresent && heroPresent.name) {
      this.heroError = true;
    } else {
      this.heroError = false;
      const newHero: Hero = {
        id: this.heroes.length,
        name: heroName
      };
      this.heroes = this.heroService.addHero(newHero);
    }
  }

  deleteHero(hero: Hero, heroIndex: number) {
    console.log(hero, heroIndex);
    this.heroes = this.heroService.deleteHero(hero, heroIndex);
  }
}
