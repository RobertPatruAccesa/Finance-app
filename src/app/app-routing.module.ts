import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'transactions', component: TransactionsComponent },
	{ path: 'transactions/:id', component: TransactionDetailsComponent },
	{ path: 'create-transaction', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
