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
	transactionType: "payment" | "addition" = 'addition';
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

	constructor(private transactionService: TransactionsService) {
		this.transactionDate = this.formatDate();
	}

	ngOnInit(): void {
		// this.transactionService.numberOfTransactions$.subscribe(data =>  console.log(data))

		// This is a very unefficient way to count all the transactions
		this.transactionService.getAllTransactions().subscribe(data => this.id = (data.length + 1).toString())
	}

	padTo2Digits(num: number) {
		// if "num" has less than two digits, then "0" it's added at the begining of num
		return num.toString().padStart(2, '0');
	}

	formatDate(date: Date = new Date()) {
		// return [date.getFullYear(), this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate())].join(
		// 	'-'
		// );
		return [ this.padTo2Digits(date.getMonth() + 1), this.padTo2Digits(date.getDate()),date.getFullYear()].join(
			'.'
		);
	}

	onSubmitForm() {
		this.transaction.userId = '1',
		this.transaction.id = this.id;
		this.transaction.amount = this.transactionAmount;
		this.transaction.type = this.transactionType;
		this.transaction.description = this.transactionDescription;
		this.transaction.date = this.transactionDate;
		this.transaction.category = this.transactionCategory;

		console.log(this.transactionDate)

		// this.transactionService.postTransaction(this.transaction).subscribe();
	}
}
