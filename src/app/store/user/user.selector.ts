import { createSelector } from "@ngrx/store";
import { User } from '../../core/interfaces/user.interface';

export interface AppState {
	user: User;
}

export const selectCeva = (state: AppState) => state.user;

export const altCeva = createSelector(
	selectCeva,
	(state: any) => state
)