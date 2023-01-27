import { createReducer, on } from '@ngrx/store';
import { getAllTransactionsAction, updateTransactionAction, addTransactionAction } from './transactions.actions';
import { Transaction } from 'src/app/core/interfaces/transaction.interface'; 

export const initialState: any = {
	transactions: []
};

export const transactionsReducer = createReducer(
	initialState,
	on(getAllTransactionsAction, (state, { transactions }) => [...transactions]),
	on(addTransactionAction, (state, transaction) => ({
		...state,
		transactions: [...state, transaction]
	})),
	on(updateTransactionAction, (state, action) => {
		console.log(action.transaction, state)
	})
);
