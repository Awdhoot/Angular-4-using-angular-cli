import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyNewComponentComponent} from './my-new-component/my-new-component.component';
import {FormsModule} from '@angular/forms';
import {NoContentComponent} from './no-content-component/no-content-component.component';
import {HomeComponent} from './home/home.component';
import {HeroComponent} from './hero/hero.component';
import {HeroesComponent} from './heroes/heroes.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {HeroService} from './hero.service';
import { StudyComponent } from './study/study.component';
import { SomeDirective } from './some.directive';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    NoContentComponent,
    HomeComponent,
    HeroComponent,
    HeroesComponent,
    StudyComponent,
    SomeDirective,
    HeroDashboardComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
