import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from '../core/interfaces/transaction.interface';
import { TransactionsService } from '../core/services/transactions.service';

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
	transactionType: string = '';
	transactionDate: string | Date = '';

	transaction: Transaction = {
		// no idea why it doesn't work without using "any"
		id: 'string',
		userId: 'string',
		amount: 0,
		type: 'payment',
		date: 'date',
		description: 'string',
		category: 'string'
	};

	constructor(private transactionService: TransactionsService) {
		this.transactionDate = this.formatDate();
	}

	ngOnInit(): void {
		// this.transactionService.numberOfTransactions$.subscribe(data =>  console.log(data))

		// This is a very unefficient way to count all the transactions
		this.transactionService.getAllTransactions().subscribe(data => this.id = data.length.toString())
	}

	padTo2Digits(num: number) {
		// if "num" has less than two digits, then "0" it's added at the begining of num
		return num.toString().padStart(2, '0');
	}

	formatDate(date: Date = new Date()) {
		return [date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join(
			'-'
		);
	}

	onSubmitForm() {
		console.log(this.transactionForm)
		console.log(this.id)
	}
}
