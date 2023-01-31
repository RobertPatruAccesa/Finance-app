import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Transaction } from 'src/app/core/interfaces/transaction.interface';

const getTransactionsFeatureState = createFeatureSelector<Transaction[]>('transactionsReducer');

export const getTransactionsSelector = createSelector(getTransactionsFeatureState, state => state);
