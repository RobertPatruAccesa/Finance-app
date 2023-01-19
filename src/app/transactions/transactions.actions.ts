import { createAction, props } from '@ngrx/store';
import { Transaction } from '../core/interfaces/transaction.interface';

// export const getAllTransactions = createAction(
// 	'[Transactions Page] Get All Transactions',
// 	props<{ transactions: Transaction[] }>()
// );

// export const getSingleTransactino = createAction(
// 	'[Transaction Details Page] Get Single Transaction',
// 	props<{ transaction: Transaction, id: String }>()
// );

export const loadAllTransactions = createAction('[Transactions Resolver] Load All Transactions');

export const allTransactionsLoaded = createAction(
	'[Load Transactions Effect]',
	props<{ transactions: Transaction[] }>()
);
