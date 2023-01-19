import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionActions } from './action-types';
import { concatMap, map, tap } from 'rxjs';
import { TransactionsService } from '../core/services/transactions.service';
import { allTransactionsLoaded } from './transactions.actions';

@Injectable()
export class TransactionsEffect {
	loadCourses$ = createEffect(() =>
		this.actions$.pipe(
			ofType(TransactionActions.loadAllTransactions),
			concatMap(action => this.transactionService.getAllTransactions()),
			map(transactions => allTransactionsLoaded({ transactions }))
		)
	);

	constructor(private actions$: Actions, private transactionService: TransactionsService) {}
}
