import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
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
  constructor(private dataService: DataService, private fb: FormBuilder, private _router: Router){
    this.initForm();
  
  }
  initForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3) ]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: [''],
      location: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  save(){
    console.log(this.form?.getRawValue());
    this.people = this.dataService.getPeople();
    this.people.push(this.form?.getRawValue());
    this.dataService.setPeople(this.people);
    this._router.navigate(['app-showdata']);

  }
  cancel(){
    this._router.navigate(['app-showdata']);
  }
}
