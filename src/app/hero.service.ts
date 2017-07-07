import {Injectable} from '@angular/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {

  private _heroes: Array<Hero> = [];

  addHero(hero: Hero) {
    this._heroes = this._heroes.slice().concat(hero);
    return this._heroes;
  }

  deleteHero(hero: Hero, heroIndex: number) {
    this._heroes = this._heroes.slice(0, heroIndex).concat(this._heroes.slice(heroIndex + 1));
    return this._heroes;
  }

  get heroes(): Array<Hero> {
    return this._heroes;
  }


}
