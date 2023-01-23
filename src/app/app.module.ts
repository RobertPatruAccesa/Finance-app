import { CreateTransactionModule } from './create-transaction/create-transaction.module';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransactionsModule } from './transactions/transactions.module';
import { TransactionDetailsModule } from './transaction-details/transaction-details.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { transactionsReducer } from './store/transactions.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransactionsEffects } from './store/transactions.effect';

@NgModule({
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule,
		HomeModule,
		CreateTransactionModule,
		TransactionsModule,
		TransactionDetailsModule,
		RouterModule,
		FormsModule,
		StoreModule.forRoot({transactions: transactionsReducer}),
		// StoreModule.forRoot(reducers, { metaReducers }),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([TransactionsEffects])
	]
})
export class AppModule {}
