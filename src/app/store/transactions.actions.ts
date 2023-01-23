import { createAction } from "@ngrx/store";

export const getAllTransactionsAction = createAction('[Transactions Page] Get All Transactions From Store');
export const getSingleTransactionAction= createAction('[Transaction Details Page] Get a Single Transaction Details');
export const updateTransactionAction = createAction('[Transaction Details Page] Update the Selected Transaction');