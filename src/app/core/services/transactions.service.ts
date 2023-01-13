import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../interfaces/transaction.interface';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TransactionsService {
	// numberOfTransactions$: Subject<number> = new Subject();

	constructor(private http: HttpClient) {
		// this.getAllTransactions().subscribe(data => {
		// 	console.log(data.length)
		// 	this.numberOfTransactions$.next(data.length);
		// });
	}

	getAllTransactions() {
		return this.http.get<Transaction[]>('/api/transactions');
	}

	getIndividualTransaction(id: string) {
		return this.http.get<Transaction[]>(`/api/transactions/${id}`);
	}

	postTransaction(transaction: Transaction) {
		return this.http.post<Transaction>('/api/transactions', transaction);
	}
}
