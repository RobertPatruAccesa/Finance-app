import { createSelector } from "@ngrx/store";

export const areTransactions = createSelector(
	(state: any) => state["transactions"],
	(transactions) => transactions
);