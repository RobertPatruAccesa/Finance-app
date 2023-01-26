import { createReducer, on } from '@ngrx/store';
import { getAllTransactionsAction, updateTransactionAction, addTransactionAction } from './transactions.actions';
import { Transaction } from '../core/interfaces/transaction.interface';
import { transition } from '@angular/animations';

export const initialState: Transaction[] = [];

export const transactionsReducer = createReducer(
	initialState,
	on(getAllTransactionsAction, (state, { transactions }) => [...transactions]),
	on(addTransactionAction, (state, transaction) => ({
		...state,
		transactions: [...state, transaction]
	})),
	on(updateTransactionAction, (state, { transaction }) => ({
		...state,
		transition: transaction
	}))
);
