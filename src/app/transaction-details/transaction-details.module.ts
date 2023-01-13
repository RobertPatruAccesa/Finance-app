import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDetailsComponent } from './transaction-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule
  ]
})
export class TransactionDetailsModule { }
