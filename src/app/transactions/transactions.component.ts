import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/interfaces/transaction.interface';
import { tap, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TransactionsState } from '../reducers/index';
// import { getAllTransactions, loadAllTransactions } from './transactions.actions';
import { selectAllTransactions } from './transactions.selectors';
import { loadAllTransactions } from './transactions.actions';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	transactions: Transaction[] = [];
	// transactions$: Observable<Transaction[]>;
	trasanctions$!: Observable<Transaction[]>;
	areTransactions$: any;

	constructor(private transactionsService: TransactionsService, private store: Store<TransactionsState>) {}

	ngOnInit(): void {
		// this.transactionsService
		// 	.getAllTransactions()
		// 	.pipe(
		// 		tap((transactions: Transaction[]) => {
		// 			this.transactions = transactions;
		// 			this.store.dispatch(loadAllTransactions());
		// 		})
		// 	)
		// 	.subscribe(); 


		// this.areTransactions$ = this.store.pipe(select(areTransactions))
		// console.log(areTransactions)

		// this.store.dispatch(loadAllTransactions());
		this.trasanctions$ = this.store.pipe(select(selectAllTransactions));
		console.log(this.trasanctions$)
	}
}
