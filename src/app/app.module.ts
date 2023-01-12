import { CreateTransactionModule } from './create-transaction/create-transaction.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransactionsModule } from './transactions/transactions.module';

@NgModule({
	declarations: [AppComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [BrowserModule, HttpClientModule, SharedModule, HomeModule, CreateTransactionModule, TransactionsModule, RouterModule, FormsModule]
})
export class AppModule {}
