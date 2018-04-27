import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummonerService } from '../../services/summoner.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styles: []
})
export class ChampionsComponent implements OnInit {
  champ;
  ddragon = 'http://ddragon.leagueoflegends.com/cdn/8.4.1/img/champion/';
  ddragoncdn = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'
  constructor(private activatedRoute: ActivatedRoute, private _summonerService:SummonerService) { }

  isActive(url:string){
    return url === this.champ.skins.num;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this._summonerService.getChampByName(params['champname']).subscribe(data=>{
        console.log("from search");
        this.champ = data;
        console.log(data)
      })
    })
  }

}
