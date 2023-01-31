import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PersonData } from '../inputdata/model/PersonData';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'lastName', 'age', 'location'];
  constructor(private dataService: DataService,  private _router: Router){}
  public people: Array<PersonData> = [];
  public temp: Array<PersonData> = [];
  public locationFilter:string = ""

  ngOnInit(){
    this.getPeople();
  }
  

  getPeople(){
    this.people = this.dataService.getPeople();
    this.temp = this.people;
  }
  
  onFilter(){
      var loc = this.locationFilter
      var newArray = this.people.filter(function (p) {
        return p.location.toLowerCase() == loc.toLowerCase();
      });
      this.people = newArray;
      console.log(newArray)
  }

  onReset(){
    
    this.people = this.temp;

  }

}
