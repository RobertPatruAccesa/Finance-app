import { createAction, props } from '@ngrx/store';
import { Transaction } from '../core/interfaces/transaction.interface';

export const deployGetAllTransactionsAction = createAction('Transactions Page] Deploy Get all transactions action');
export const getAllTransactionsAction = createAction(
	'[Transactions Page] Get All Transactions From Store',
	props < { transactions: ReadonlyArray<Transaction> }>()
);

export const getSingleTransactionAction = createAction('[Transaction Details Page] Get a Single Transaction Details');
export const updateTransactionAction = createAction('[Transaction Details Page] Update the Selected Transaction');

// Make an action to get users from Json server