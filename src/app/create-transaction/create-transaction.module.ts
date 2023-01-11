import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransactionComponent } from './create-transaction.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [CreateTransactionComponent],
	imports: [CommonModule, RouterModule, AppRoutingModule],
	exports: [CreateTransactionComponent]
})
export class CreateTransactionModule {}
