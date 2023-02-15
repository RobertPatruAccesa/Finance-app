import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RcaPageOneComponent } from './rca-page-one/rca-page-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RcaPageOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RCACalculatorModule { }
