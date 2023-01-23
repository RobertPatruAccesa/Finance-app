import { createReducer, on } from '@ngrx/store';
import { getAllTransactionsAction, getSingleTransactionAction, updateTransactionAction } from './transactions.actions';
import { Transaction } from '../core/interfaces/transaction.interface';
import { TransactionsService } from '../core/services/transactions.service';

export const initialState: Transaction[] = [];

export const transactionsReducer = createReducer(
	initialState,
	on(getAllTransactionsAction, (state, {transactions}) => [...transactions])
);
