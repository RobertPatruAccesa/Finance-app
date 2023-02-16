import { Component, OnInit } from '@angular/core';
import { Transaction } from '../core/interfaces/transaction.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { deployGetAllTransactionsAction } from '../store/transactions/transactions.actions';
import { getTransactionsSelector } from '../store/transactions/transactions.selector'; 

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	transactions$!: Observable<Transaction[]>;

	constructor(private store: Store<{ transactions: Transaction[] }>) {}

	ngOnInit(): void {
		this.store.dispatch(deployGetAllTransactionsAction())
		this.transactions$ = this.store.pipe(select(getTransactionsSelector))
	}
}