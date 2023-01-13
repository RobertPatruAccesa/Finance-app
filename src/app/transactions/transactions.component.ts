import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/interfaces/transaction.interface';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	transactions: Transaction[] = [];

	constructor(private transactionsService: TransactionsService) {}
	ngOnInit(): void {
		this.transactionsService.getAllTransactions().subscribe(data => {
			this.transactions = data;
		});
	}

}
