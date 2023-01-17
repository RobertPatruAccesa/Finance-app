import { ActionReducerMap, createReducer, on, State } from '@ngrx/store';
import { Transaction } from '../core/interfaces/transaction.interface';
import { TransactionActions } from '../transactions/action-types';

export interface TransactionsState {
	transactions: Transaction[];
}

export const initialTransactionState: Transaction[] = [];

export const transactionsReducer = createReducer(
	initialTransactionState,
	on(TransactionActions.getAllTransactions, (state, action) => {
		return {
			transactions: action.transactions
		}
	})
)