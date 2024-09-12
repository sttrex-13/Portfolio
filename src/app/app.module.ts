import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponentModule } from './presentation/view/base/base.module';
import { SharedModule } from './presentation/view/shared/shared.module';
import { LandingPageComponent } from './presentation/view/pages/landing-page/landing-page.component';
import { HomePageComponent } from './presentation/view/pages/home-page/home-page.component';
import { AboutMePageComponent } from './presentation/view/pages/about-me-page/about-me-page.component';
import { ContactPageComponent } from './presentation/view/pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    AboutMePageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BaseComponentModule,
    SharedModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
