import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'transactions',
		loadComponent: () => import('./transactions/transactions.module').then(m => m.TransactionsModule)
	},
	{
		path: 'transactions/:id',
		loadComponent: () =>
			import('./transaction-details/transaction-details.module').then(m => m.TransactionDetailsModule)
	},
	{
		path: 'create-transaction',
		loadComponent: () =>
			import('./create-transaction/create-transaction.module').then(m => m.CreateTransactionModule)
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
