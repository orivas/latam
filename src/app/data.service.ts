import { Injectable } from '@angular/core';
import { PersonData } from './inputdata/model/PersonData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public people: Array<PersonData> = [];
  constructor() { }

  public getPeople() {
    if(localStorage.getItem('p')){
      this.people = JSON.parse(localStorage.getItem('p') || '');
    }else{
      this.people = [];
    }

    
    return  this.people;
  }
  public setPeople(val: Array<PersonData> ) {
    this.save(val)
    
  }

  reset(){
    localStorage.setItem('p', JSON.stringify([]));
  }

  private save(val: Array<PersonData> ){
    localStorage.setItem('p', JSON.stringify(val));
    this.people = val;
  }

  deleteByPosition(position: number){
    this.people.splice(position,1)
    this.save(this.people)
  }

}
