import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PersonData } from '../inputdata/model/PersonData';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit{
  
  @ViewChild(ListComponent, {static : true}) list! : ListComponent;

  constructor(private dataService: DataService,  private _router: Router){}
  public people: Array<PersonData> = [];
  public peopleMenor: Array<PersonData> = [];
  public peopleMayor: Array<PersonData> = [];
  public ageSelected:number = 18

  ngOnInit(): void {
    this.people = this.dataService.getPeople();
  }

  private onReset(){
    this.dataService.reset();
    this.list.updatePeople();
  }

  onBack(){
    this.onReset();
    this._router.navigate(['app-inputdata']);
  }

}
