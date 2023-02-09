import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RcaPageOneComponent } from './rca-page-one/rca-page-one.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RcaPageOneComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RCACalculatorModule { }
