import { Component } from '@angular/core';

@Component({
	selector: 'app-create-transaction',
	templateUrl: './create-transaction.component.html',
	styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent {
	selectedDate: string = '';

	constructor() {
		this.selectedDate = this.formatDate();
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
}
