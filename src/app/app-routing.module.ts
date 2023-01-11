import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'transactions',
		component: TransactionsComponent,
			children: [{ path: ':id', component: TransactionDetailsComponent }]
	},
	{ path: 'create-transaction', component: CreateTransactionComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
