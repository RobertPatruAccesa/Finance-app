import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
	transactions: any = [
		{
			userId: "1",
			transactionId: "1",
			amount: "100.00",
			type: "payment",
			date: "23.12.2022",
			description: "Electricity bill"
		},
		{
			userId: "1",
			transactionId: "2",
			amount: "1000.00",
			type: "payment",
			date: "02.01.2023",
			description: "Paying Rent"
		},
		{
			userId: "1",
			transactionId: "3",
			amount: "40.00",
			type: "payment",
			date: "23.12.2022",
			description: "Electricity bill"
		},
		{
			userId: "1",
			transactionId: "1",
			amount: "100.00",
			type: "payment",
			date: "23.12.2022",
			description: "Electricity bill"
		},
		{
			userId: "1",
			transactionId: "2",
			amount: "1000.00",
			type: "payment",
			date: "02.01.2023",
			description: "Paying Rent"
		},
		{
			userId: "1",
			transactionId: "3",
			amount: "40.00",
			type: "payment",
			date: "23.12.2022",
			description: "Electricity bill"
		}
	]

	constructor (private route: ActivatedRoute, private router: Router) {	}
}
