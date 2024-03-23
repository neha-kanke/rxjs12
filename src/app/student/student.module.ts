import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudFormComponent } from './stud-form/stud-form.component';
import { StudTableComponent } from './stud-table/stud-table.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudFormComponent,
    StudTableComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
    
  ],
  exports:[DashboardComponent]
})
export class StudentModule { }
