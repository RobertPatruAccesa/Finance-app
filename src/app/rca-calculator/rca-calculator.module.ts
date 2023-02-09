import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RcaPageOneComponent } from './rca-page-one/rca-page-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RcaPageOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RCACalculatorModule { }
