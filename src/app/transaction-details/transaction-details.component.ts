import { updateTransactionAction } from '../store/transactions/transactions.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TransactionsService } from '../core/services/transactions.service';
import { Transaction } from '../core/interfaces/transaction.interface';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-transaction-details',
	templateUrl: './transaction-details.component.html',
	styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
	@ViewChild('f') transactionForm!: NgForm;

	transactionDescription: string = '';
	transactionAmount: number = 0;
	transactionCategory: string = '';
	transactionType: string = '';
	transactionDate: string | Date = '';

	id: string = '0';

	transaction: Transaction | any = {
		// no idea why it doesn't work without using "any"
		id: 'string',
		userId: 'string',
		amount: 0,
		type: 'payment',
		date: 'date',
		description: 'string',
		category: 'string'
	};

	constructor(
		private transactionsService: TransactionsService,
		private route: ActivatedRoute,
		private store: Store,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			if (params.get('id') !== null) {
				this.id = params!.get('id')!.toString();

				this.transactionsService.getIndividualTransaction(this.id).subscribe(data => {
					// without using "any" the compiler says:  Type 'Transaction[]' is missing the following properties from type 'Transaction': id, userId, amount, type, and 3 more.
					// I had to use "transaction" because I couldn't access the object keys within "data"
					this.transaction = data;

					this.transactionDescription = this.transaction.description;
					this.transactionAmount = this.transaction.amount;
					this.transactionCategory = this.transaction.category;
					this.transactionType = this.transaction.type;

					this.transactionDate = new Date(this.transaction.date); // to see why this doesn't work
				});
			}
		});
	}

	onEditForm() {
		this.transaction.description = this.transactionDescription;
		this.transaction.amount = this.transactionAmount;
		this.transaction.category = this.transactionCategory;
		this.transaction.type = this.transactionType;
		this.transaction.date = this.transactionDate;

		// this.transactionsService.updateTransaction(this.id, this.transaction).subscribe();

		this.store.dispatch(updateTransactionAction(this.transaction));
	}

	onCancel() {
		this.router.navigate(['transactions'])
	}
}