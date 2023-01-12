import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionComponent } from './create-transaction.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [CreateTransactionComponent],
	imports: [CommonModule, FormsModule],
})
export class CreateTransactionModule {}
