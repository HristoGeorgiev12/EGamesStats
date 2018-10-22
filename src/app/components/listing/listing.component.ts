import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  jsonArray:object[];
  bla:string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.bla = "as";
    this.jsonArray = [];
    this.dataService.getData().subscribe(val => this.jsonArray.push(val));
    console.log(this.jsonArray);

  }



}
