import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
	providedIn: 'root'
})
export class TransactionsService {
	constructor(private http: HttpClient) {}

	getAllTransactions() {
		return this.http.get<Transaction[]>('/api/users');
	}
}
