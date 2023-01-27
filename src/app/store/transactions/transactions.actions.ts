import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../core/interfaces/transaction.interface';

export const deployGetAllTransactionsAction = createAction('Transactions Page] Deploy Get all transactions action');
export const getAllTransactionsAction = createAction(
	'[Transactions Page] Get All Transactions From Store',
	props<{ transactions: ReadonlyArray<Transaction> }>()
);

export const addTransactionAction = createAction(
	'[Create Transactions Page] Add a New Transaction',
	props<{ transaction: Transaction }>()
);

export const updateTransactionAction = createAction(
	'[Transaction Details Page] Update the Selected Transaction',
	props<{ transaction: any }>()
);

// Make an action to get users from Json server
