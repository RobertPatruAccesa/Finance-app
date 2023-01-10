import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';

@NgModule({
	declarations: [
    TransactionsComponent
  ],
	imports: [CommonModule],
	exports: [TransactionsComponent]
})
export class TransactionsModule {}
