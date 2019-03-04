import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatButtonToggleModule, MatButtonModule, MatBadgeModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContainerComponent } from './container/container.component';
import {CommonService} from "./common.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule, MatButtonModule, MatBadgeModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
