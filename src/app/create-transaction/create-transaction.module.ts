import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionComponent } from './create-transaction.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [CreateTransactionComponent],
	imports: [SharedModule, CommonModule, FormsModule]
})
export class CreateTransactionModule {}