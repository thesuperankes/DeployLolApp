import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { app_routing } from './app.routes';

import { SummonerService } from './services/summoner.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MatchComponent } from './components/match/match.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SummonerComponent } from './components/summoner/summoner.component';
import { SummonerSearchComponent } from './components/summoner-search/summoner-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MatchComponent,
    ChampionsComponent,
    SummonerComponent,
    SummonerSearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
    SummonerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
