import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpserviceService {
  heroes: Array<Hero> = [];
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
  }

  loadHeroes() {
    return this.http.get('/api/heroes')
      .map(res => res.json());
  }

  addHero(hero: Hero) {
    return this.http.post('/api/heroes', JSON.stringify(hero), this.headers);
  }

}
