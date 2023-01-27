import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'home', component: HomeComponent },
	{ path: 'transactions', component: TransactionsComponent },
	{ path: 'transactions/:id', component: TransactionDetailsComponent },
	{ path: 'create-transaction', component: CreateTransactionComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
