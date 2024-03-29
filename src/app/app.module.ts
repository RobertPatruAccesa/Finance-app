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
import { EffectsModule } from '@ngrx/effects';
import { TransactionsEffects } from './store/transactions/transactions.effect'; 
import { transactionsReducer } from './store/transactions/transactions.reducer';
import { LoginModule } from './login/login.module';
import { usersReducer } from './store/user/user.reducer';
import { RCACalculatorModule } from './rca-calculator/rca-calculator.module';
import { rcaReducer } from './rca-calculator/store/rca.reducer';
import { RegisterModule } from './register/register.module';

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
		LoginModule,
		RouterModule,
        RCACalculatorModule,
        RegisterModule,
		FormsModule,
		StoreModule.forRoot({ transactionsReducer,  usersReducer, rcaReducer}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([TransactionsEffects])
	]
})
export class AppModule {}
