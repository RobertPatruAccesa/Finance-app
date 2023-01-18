import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionActions } from './action-types';
import { tap } from 'rxjs';

@Injectable()
export class TransactionsEffect {
	login$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(TransactionActions.getAllTransactions),
				tap(action => {
					console.log('Side Effect: ', 'Transactions actions activated', action.transactions);
				})
			),
		{ dispatch: false }
	);

	constructor(private actions$: Actions) {}
}
