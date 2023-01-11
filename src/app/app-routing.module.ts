import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
	{ 
		path: '', 
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'transactions',
		component: TransactionsComponent
	},
	{
		path: 'transactions/:id',
		component: TransactionDetailsComponent
	},
	{
		path: 'create-transaction',
		component: CreateTransactionComponent
	},
	{    path: '',    redirectTo: '',    pathMatch: 'full'  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
