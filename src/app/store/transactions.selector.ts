import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Transaction } from '../core/interfaces/transaction.interface';

const getTransactionsFeatureState = createFeatureSelector<Transaction[]>('transactions');

export const getTransactionsSelector = createSelector(getTransactionsFeatureState, state => state);
