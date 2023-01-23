import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/interfaces/transaction.interface';
import { Observable } from 'rxjs';
import {
	getAllTransactionsAction,
	getSingleTransactionAction,
	updateTransactionAction
} from '../store/transactions.actions';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	// transactions: Transaction[] = [];
	transactions$!: Observable<Transaction[]>;

	constructor(private store: Store<{ transactions: Transaction[] }>) {
		this.transactions$ = store.select('transactions');
	}

	ngOnInit(): void {
		// this.transactionsService.getAllTransactions().subscribe(data => {
		// 	this.transactions = data;
		// });

		this.store.dispatch(getAllTransactionsAction());
	}
}
