import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from './user.reducer';

export const selectState = (state: UsersState) => state;
export const selectUserState = createFeatureSelector<UsersState>('usersReducer');

export const selectIsUserValid = createSelector(selectUserState, user => {
	return user.userIsValid;
});
