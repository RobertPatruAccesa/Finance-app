import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionComponent } from './create-transaction.component';

@NgModule({
	declarations: [CreateTransactionComponent],
	imports: [CommonModule],
	exports: [CreateTransactionComponent]
})
export class CreateTransactionModule {}
