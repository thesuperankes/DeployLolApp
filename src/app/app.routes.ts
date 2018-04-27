import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchComponent } from './components/match/match.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SummonerComponent } from './components/summoner/summoner.component';
import { SummonerSearchComponent } from './components/summoner-search/summoner-search.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'match', component: MatchComponent },
  { path: 'champions/:champname', component: ChampionsComponent },
  { path: 'summoner', component: SummonerComponent },
  { path: 'summonerSearch/:username', component: SummonerSearchComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
