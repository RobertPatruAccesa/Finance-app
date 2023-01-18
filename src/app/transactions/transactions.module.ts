import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { transactionsReducer } from '../reducers/index';
import { TransactionsEffect } from './transactions.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [TransactionsComponent],
	imports: [
		CommonModule,
		RouterModule,
		StoreModule.forFeature('transactions', transactionsReducer),
		EffectsModule.forFeature([TransactionsEffect])
	],
	exports: [TransactionsComponent]
})
export class TransactionsModule {}
