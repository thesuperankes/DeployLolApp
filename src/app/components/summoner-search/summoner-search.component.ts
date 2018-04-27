import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummonerService } from '../../services/summoner.service'

@Component({
  selector: 'app-summoner-search',
  templateUrl: './summoner-search.component.html',
  styles: []
})
export class SummonerSearchComponent implements OnInit {
  summoner
  ddragon = 'http://ddragon.leagueoflegends.com/cdn/8.4.1/img/profileicon/';
  constructor(private activatedRoute:ActivatedRoute,
              private _getSummoner:SummonerService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this._getSummoner.getSummonerInfoByName(params['username']).subscribe( data  => {
      console.log("Desde el search");
      this.summoner = data;
      console.log(data);
    });
  });
  }

}
