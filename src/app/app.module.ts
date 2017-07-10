import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyFilterPipePipe } from './my-filter-pipe.pipe';
import { FormComponent } from './form/form.component';
import { ValidatorDirective } from './validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyFilterPipePipe,
    FormComponent,
    ValidatorDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
