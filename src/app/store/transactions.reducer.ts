import { createReducer, on } from '@ngrx/store';
import { getAllTransactionsAction, updateTransactionAction, addTransactionAction } from './transactions.actions';
import { Transaction } from '../core/interfaces/transaction.interface';

export const initialState: Transaction[] = [];

export const transactionsReducer = createReducer(
	initialState,
	on(getAllTransactionsAction, (state, { transactions }) => [...transactions]),
	on(addTransactionAction, (state, transaction) => ({
		...state,
		transactions: [...state, transaction]
	})),
	on(updateTransactionAction, (state, action) => {
		let transactions = [...state];

		console.log(action.transaction, action.transaction);

		let index = transactions.find(trans => {
			// console.log(action.transaction)
		});

		// console.log(index);

		return [...transactions];
	})
);
