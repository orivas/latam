import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgeService } from '../age.service';
import { DataService } from '../data.service';
import { ListComponent } from '../list/list.component';
import { PersonData } from './model/PersonData';

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent {
  public person: PersonData | undefined;
  public people: Array<PersonData> = [];
  public form: FormGroup  =this.fb.group({});

  @ViewChild(ListComponent, {static : true}) list! : ListComponent;

  constructor(private dataService: DataService, private fb: FormBuilder, private _router: Router, private ageServicce: AgeService){
    this.initForm();
  }
  initForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3) ]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      age: [''],
      location: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  save(){
    console.log(this.form?.getRawValue());
    this.people = this.dataService.getPeople();
    this.people.push(this.form?.getRawValue());
    this.dataService.setPeople(this.people);
    this.list.updatePeople();

  }
  enviar(){
    var ageSelected = prompt("age?","0");
    this.ageServicce.setAge(parseInt(ageSelected!));
    this._router.navigate(['app-showdata']);
  }
}
