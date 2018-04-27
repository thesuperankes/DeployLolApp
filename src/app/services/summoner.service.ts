import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SummonerService {

  summoner:any[] = [];
  champ:any[] = [];
  url = 'http://localhost:3000/';

  constructor(private http:Http) { }

  getSummonerInfoByName(username:string){
    let query = `api/summoner/${username}`;

    let uri = this.url + query;
    console.log(uri);

    return this.http.get( uri )
       .map( res=>{
         console.log("In The Services");
         this.summoner = res.json();
         console.log(this.summoner);

         return this.summoner;
    });
  }

  getChampByName(champname:string){
    let query = `api/champjson/${champname}`;

    let uri = this.url + query;
    console.log(uri);

    return this.http.get( uri ).map(res=>{
      console.log("In the service");
      this.champ = res.json();
      console.log(this.champ);
      return this.champ;
    })
  }

}
