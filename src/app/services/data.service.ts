import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  obj:object;
  constructor(public http: Http) { 
    console.log("data services");
  }

  getDataChamps(el = 0) {
    console.log(el);
    // const url = "https://api.pandascore.co/lol/champions.json?page[number]=1&token=qFrht_AffHj7SIOjw9l6OD4baMGVDILS2VHKDxGVXhKKgux8oww";
    this.obj = {
      url: "https://api.pandascore.co/lol/champions.json?",
      page: "page[number]=1",
      token: "token=qFrht_AffHj7SIOjw9l6OD4baMGVDILS2VHKDxGVXhKKgux8oww"
    }; 

    if(el) {
      console.log(12);
      this.obj.search = "search[name]="+el
    }

    console.log(this.obj);
    // var queryString = Object.keys(this.obj).map(key => key + '=' + this.obj[key]).join('&');
    var queryString = Object.keys(this.obj).map(key =>this.obj[key]).join('&');
    console.log(queryString);
    const url = "https://api.pandascore.co/lol/champions.json?page[number]=1&token=qFrht_AffHj7SIOjw9l6OD4baMGVDILS2VHKDxGVXhKKgux8oww";
    return this.http.get(queryString)
    .pipe(map(res => res.json()));

  }
}
