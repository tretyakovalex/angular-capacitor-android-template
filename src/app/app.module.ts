import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './partials/nav/nav.component';
import { HeroComponent } from './partials/hero/hero.component';
import { HowItWorksComponent } from './partials/how-it-works/how-it-works.component';
import { PricingComponent } from './partials/pricing/pricing.component';
import { TestimonialsComponent } from './partials/testimonials/testimonials.component';
import { FaqComponent } from './partials/faq/faq.component';
import { FooterComponent } from './partials/footer/footer.component';
import { PartnersComponent } from './partials/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeroComponent,
    HowItWorksComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
