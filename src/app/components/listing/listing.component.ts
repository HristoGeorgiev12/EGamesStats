import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  jsonArrayChamps:interfaceChamps[];
  jsonArrayGames:object[];
  displayInfo:object[];

  constructor(private dataService: DataService) { }

  search(el) {
    console.log(el);
    this.jsonArrayChamps = [];
    this.displayInfo = this.jsonArrayChamps;
    // this.displayInfo = this.jsonArrayChamps.filter(v => {
    //   return !v.name.toLowerCase().indexOf(el);
    // })
    this.dataService.getDataChamps(el).subscribe(val => {
      val.map(v =>  {
        this.jsonArrayChamps.push(v);
      })
    });

  }

  ngOnInit() {
    this.jsonArrayChamps = [];
    this.jsonArrayGames = [];
    this.displayInfo = this.jsonArrayChamps;
    this.dataService.getDataChamps().subscribe(val => {
      val.map(v =>  {
        console.log(v);
        this.jsonArrayChamps.push(v);
      })
    });
  }
}


interface interfaceChamps {
  id: number;
  name: string;
}
