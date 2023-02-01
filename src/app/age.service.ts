import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  public ageSelecte: number = 18

  constructor() { }

  setAge(age:number){
    this.ageSelecte = age;
  }

  getAge(){
    return this.ageSelecte;
  }

}
