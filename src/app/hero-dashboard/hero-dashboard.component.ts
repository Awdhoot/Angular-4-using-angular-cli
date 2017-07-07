import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.scss']
})
export class HeroDashboardComponent implements OnInit {
  topHeroes: Array<Hero> = [];

  constructor(private heroService: HeroService, private router: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('router -> ', this.router);
    this.router.queryParams.subscribe(param => console.log('params -> ', param)
    );
    this.topHeroes = this.heroService.heroes.length ? this.heroService.heroes.slice(0, 4) : [];
  }

}
