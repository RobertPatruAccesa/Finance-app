import { createReducer, on } from '@ngrx/store';
import { getAllTransactionsAction, getSingleTransactionAction, updateTransactionAction } from './transactions.actions';
import { Transaction } from '../core/interfaces/transaction.interface';
import { TransactionsService } from '../core/services/transactions.service';

export const initialState: Transaction[] = [];
let transactions: Transaction[] = [];

export const transactionsReducer = createReducer(
	initialState,
	on(getAllTransactionsAction, (state: Transaction[]) => {
		console.log('Get All Transactions Action activated in Reducer', state, transactions);
		return (state = transactions);
	})
);

class ReducerClass {
	constructor(private transactionService: TransactionsService) {
		transactionService.getAllTransactions().subscribe(data => (transactions = data));
	}
}
