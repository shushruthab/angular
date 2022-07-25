import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FeaturePresentationalModule } from '@angular-anim/shared/presentational';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureAccountSummaryModule } from '@angular-anim/feature/account-summary';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeaturePresentationalModule,
    FeatureAccountSummaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
