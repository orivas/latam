import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PersonData } from '../inputdata/model/PersonData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private dataService: DataService,  private _router: Router){}
  displayedColumns: string[] = [ 'name', 'lastName', 'age', 'location'];
  public people: Array<PersonData> = [];
  @Input() delete!: boolean;
  @Input() menor!: boolean;
  @Input() ageSelected!: number;

  ngOnInit(){
    this.getPeople();
    if(this.delete){
      this.displayedColumns.push('delete');
    }else{
      this.filterPeople();
    }
  }
  

  getPeople(){
    this.people = this.dataService.getPeople();
  }

  updatePeople(){
    this.getPeople();
  }

  deletePerson(position: number){
     this.dataService.deleteByPosition(position);
     this.updatePeople();
  }

  filterPeople(){
    if(this.menor){
      this.people = this.people.filter((person) => {
        return person.age < this.ageSelected;
      });
    }else{
      this.people = this.people.filter((person) => {
        return person.age >= this.ageSelected;
      });
    }
  }
}
