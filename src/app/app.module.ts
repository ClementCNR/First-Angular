import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { CounterComponent } from './component/counter/counter.component';
import { CustomButtonDirective } from './directives/custom-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CounterComponent,
    CustomButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
