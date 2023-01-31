import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputdataComponent } from './inputdata/inputdata.component';
import { ShowdataComponent } from './showdata/showdata.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-inputdata', pathMatch: 'full' },
  { path: 'app-inputdata', component: InputdataComponent },
  { path: 'app-showdata', component: ShowdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
