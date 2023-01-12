import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionComponent } from './create-transaction.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [CreateTransactionComponent],
	imports: [CommonModule, FormsModule, SharedModule]
})
export class CreateTransactionModule {}
