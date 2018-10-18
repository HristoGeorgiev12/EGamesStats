import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) { 
    console.log("data services");
  }

  getData() {
    return this.http.get("https://api.pandascore.co/lol/champions.json?page[number]=2&token=qFrht_AffHj7SIOjw9l6OD4baMGVDILS2VHKDxGVXhKKgux8oww")
  }
}
