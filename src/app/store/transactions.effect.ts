import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs';
import { TransactionsService } from '../core/services/transactions.service';
import { deployGetAllTransactionsAction, getAllTransactionsAction } from './transactions.actions';

@Injectable()
export class TransactionsEffects {
	constructor(private actions$: Actions, private transactionsService: TransactionsService, private store: Store) {}

	loadAllTransactions$ = createEffect(() =>
		this.actions$.pipe(
			ofType(deployGetAllTransactionsAction),
			exhaustMap(() =>
				this.transactionsService
					.getAllTransactions()
					.pipe(map(transactions => getAllTransactionsAction({ transactions })))
			)
		)
	);
}
