import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/interfaces/transaction.interface';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { getAllTransactions } from './transactions.actions';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	transactions: Transaction[] = [];

	constructor(private transactionsService: TransactionsService, private store: Store<AppState>) {}

	ngOnInit(): void {
		this.transactionsService
			.getAllTransactions()
			.pipe(
				tap((transactions: Transaction[]) => {
					this.transactions = transactions;
					this.store.dispatch(getAllTransactions({ transactions }));
				})
			)
			.subscribe();
	}
}
