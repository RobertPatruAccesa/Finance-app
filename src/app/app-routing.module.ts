import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/services/auth.guard';
import { RcaPageOneComponent } from './rca-calculator/rca-page-one/rca-page-one.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard]  },
	{ path: 'transactions/:id', component: TransactionDetailsComponent, canActivate: [AuthGuard]  },
	{ path: 'create-transaction', component: CreateTransactionComponent, canActivate: [AuthGuard]  },
	{ path: 'RCA/1', component: RcaPageOneComponent  },
	{ path: '**', redirectTo: 'login' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
