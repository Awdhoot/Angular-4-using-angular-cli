import {Routes} from '@angular/router';
import {NoContentComponent} from './no-content-component/no-content-component.component';
import {HomeComponent} from './home/home.component';
import {HeroComponent} from './hero/hero.component';
import {HeroesComponent} from './heroes/heroes.component';
import {StudyComponent} from './study/study.component';
import {HeroDashboardComponent} from './hero-dashboard/hero-dashboard.component';

export const ROUTES: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {path: 'dash', component: HeroDashboardComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: HeroDashboardComponent},
      {path: 'heroes/:someData', component: HeroesComponent}
    ]
  },
  {path: 'hero', component: HeroComponent},
  {path: 'study', component: StudyComponent},
  {path: '**', component: NoContentComponent},
];
