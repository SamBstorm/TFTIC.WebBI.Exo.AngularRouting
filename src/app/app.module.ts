import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FanUpdateComponent } from './components/fan-update/fan-update.component';
import { FanCreateComponent } from './components/fan-create/fan-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFanComponent } from './components/list-fan/list-fan.component';
import { FanDetailsComponent } from './components/fan-details/fan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFanComponent,
    FanDetailsComponent,
    FanCreateComponent,
    FanUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
