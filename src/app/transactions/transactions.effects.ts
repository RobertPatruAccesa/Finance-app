import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()

export class TransactionsEffect {
	constructor (private actions$: Actions) {
		actions$.subscribe(action => {
			if(action.type == '[Transactions Page] Get All Transactions') {
				console.log('Side Effect: ', 'Transactions actions activated')
			}
		})
	}
}