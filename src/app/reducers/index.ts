import { ActionReducerMap, createReducer, on, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Transaction } from '../core/interfaces/transaction.interface';
import { TransactionActions } from '../transactions/action-types';

export interface TransactionsState extends EntityState<Transaction> {
	enteties: { [key: string]: Transaction };
	ids: string[];
}

export const adapter = createEntityAdapter<Transaction>();

export const initialTransactionsState = adapter.getInitialState();

export const transactionsReducer = createReducer(
	initialTransactionsState,

	// instead of "addMany" in the course is used "addAll"
	// in my case, the compiler says that there is no "addAll" so I used "addMany"
	on(TransactionActions.allTransactionsLoaded, (state, action) => adapter.addMany(action.transactions, state))
);

export const { selectAll } = adapter.getSelectors();
