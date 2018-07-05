import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { HeroComponent } from './main-landing/hero/hero.component';
import { SectionOneComponent } from './main-landing/section-one/section-one.component';
import { SectionTwoComponent } from './main-landing/section-two/section-two.component';
import { SectionThreeComponent } from './main-landing/section-three/section-three.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    MainLandingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HeaderComponent}
    ]),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
