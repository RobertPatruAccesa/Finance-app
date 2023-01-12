import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDetailsComponent } from './transaction-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule, SharedModule
  ]
})
export class TransactionDetailsModule { }
