import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  { path: 'tasklist', component: TasklistComponent },
  { path: 'tasklist/:id', component: TasklistComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
