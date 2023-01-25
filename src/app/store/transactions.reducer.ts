import { createReducer, on } from '@ngrx/store';
import {
	getAllTransactionsAction,
	getSingleTransactionAction,
	updateTransactionAction,
	addTransactionAction
} from './transactions.actions';
import { Transaction } from '../core/interfaces/transaction.interface';

export const initialState: Transaction[] = [];

export const transactionsReducer = createReducer(
	initialState,
	on(getAllTransactionsAction, (state, { transactions }) => [...transactions]),
	on(addTransactionAction, (state, transaction) => ({
		...state,
		transactions: [...state, transaction]
	}))
);
