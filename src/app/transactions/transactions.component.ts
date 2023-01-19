import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/interfaces/transaction.interface';
import { tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TransactionsState } from '../reducers/index';
// import { getAllTransactions, loadAllTransactions } from './transactions.actions';
import { areTransactions } from './transactions.selectors';
import { loadAllTransactions } from './transactions.actions';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	transactions: Transaction[] = [];
	areTransactions$: any;

	constructor(private transactionsService: TransactionsService, private store: Store<TransactionsState>) {}

	ngOnInit(): void {
		// this.transactionsService
		// 	.getAllTransactions()
		// 	.pipe(
		// 		tap((transactions: Transaction[]) => {
		// 			this.transactions = transactions;
		// 			this.store.dispatch(loadAllTransactions({ transactions }));
		// 		})
		// 	)
		// 	.subscribe(); 


		// this.areTransactions$ = this.store.pipe(select(areTransactions))
		// console.log(areTransactions)
	}
}
