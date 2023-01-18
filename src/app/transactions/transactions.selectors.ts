import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransactionsState } from '../reducers/index';

export const selectTransactionsState = createFeatureSelector<TransactionsState>("transactions")

export const areTransactions = createSelector(
	selectTransactionsState,
	(transactions) => {
		console.log(transactions)
		return transactions
	}
);