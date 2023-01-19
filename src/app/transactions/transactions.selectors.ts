import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransactionsState } from '../reducers/index';
import * as fromReducer from "../reducers/index";

export const selectTransactionsState = createFeatureSelector<TransactionsState>("transactions")

// export const areTransactions = createSelector(
// 	selectTransactionsState,
// 	(transactions) => {
// 		console.log(transactions)
// 		return transactions
// 	}
// );

export const selectAllTransactions = createSelector(
	selectTransactionsState,
	fromReducer.selectAll
)

