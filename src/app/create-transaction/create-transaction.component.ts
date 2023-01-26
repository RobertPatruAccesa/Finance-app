import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from '../core/interfaces/transaction.interface';
import { TransactionsService } from '../core/services/transactions.service';
import { Store } from '@ngrx/store';
import { addTransactionAction } from '../store/transactions.actions';
import { pipe } from 'rxjs';

@Component({
	selector: 'app-create-transaction',
	templateUrl: './create-transaction.component.html',
	styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
	@ViewChild('f') transactionForm!: NgForm;

	id: string = '0';
	transactionDescription: string = '';
	transactionAmount: number = 0;
	transactionCategory: string = '';
	transactionType: 'payment' | 'addition' = 'addition';
	transactionDate: string | Date = '';

	transaction: Transaction = {
		id: 'string',
		userId: 'string',
		amount: 0,
		type: 'payment',
		date: 'date',
		description: 'string',
		category: 'string'
	};

	showErorr: boolean = false;
	transactionAdded: boolean = false;

	constructor(private transactionService: TransactionsService, private store: Store) {
		this.transactionDate = this.formatDate();
	}

	ngOnInit(): void {
		this.transactionService.getAllTransactions().subscribe(data => (this.id = (data.length + 1).toString()));
	}

	padTo2Digits(num: number) {
		// if "num" has less than two digits, then "0" it's added at the begining of num
		return num.toString().padStart(2, '0');
	}

	formatDate(date: Date = new Date()) {
		return [date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join(
			'-'
		);
		// return [ this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate()),date.getFullYear()].join(
		// 	'.'
		// );
	}

	onSubmitForm() {
		(this.transaction.userId = '1'), (this.transaction.id = this.id);
		this.transaction.amount = this.transactionAmount;
		this.transaction.type = this.transactionType;
		this.transaction.description = this.transactionDescription;
		this.transaction.date = this.transactionDate;
		this.transaction.category = this.transactionCategory;

		this.store.dispatch(addTransactionAction({ transaction: this.transaction }));

		this.transactionService.postTransaction(this.transaction).subscribe(
			response => {
				this.transactionAmount = 0;
				this.transactionDescription = '';
				this.transactionCategory = '';

				this.transactionAdded = true;
				setTimeout(() => {
					this.transactionAdded = false;
				}, 2000);
			},
			error => {
				this.showErorr = true;

				setTimeout(() => {
					this.showErorr = false;
				}, 2000);
			}
		);
	}
}
