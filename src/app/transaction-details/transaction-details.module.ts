import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionDetailsComponent } from './transaction-details.component';

@NgModule({
	declarations: [TransactionDetailsComponent],
	imports: [CommonModule],
	exports: [TransactionDetailsComponent]
})
export class TransactionDetailsModule {}
