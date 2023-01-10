import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [TransactionsComponent],
	imports: [CommonModule, SharedModule, AppRoutingModule, RouterModule],
	exports: [TransactionsComponent]
})
export class TransactionsModule {}
