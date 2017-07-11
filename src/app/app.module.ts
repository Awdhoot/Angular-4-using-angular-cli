import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import {FormsModule} from '@angular/forms';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {HttpserviceService} from './httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyFilterPipePipe,
    HeroesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
