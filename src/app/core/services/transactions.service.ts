import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../interfaces/transaction.interface';
import { catchError, Subject, throwError } from 'rxjs';
import { transition } from '@angular/animations';

@Injectable({
	providedIn: 'root'
})
export class TransactionsService {
	constructor(private http: HttpClient) {
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

	updateTransaction(id: string, transition: Transaction) {
		return this.http.patch(`/api/transactions/${id}`, transition);
	}
}
