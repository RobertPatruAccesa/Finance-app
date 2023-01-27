import { createReducer, on } from '@ngrx/store';
import { loginUser, usersLoadedSuccess } from './user.actions';

export interface UsersState {
	users: [
		{
			username: string;
			password: string;
		}
	];
}

const initialState: UsersState = {
	users: [
		{
			username: 'string',
			password: 'string'
		}
	]
};

export const UsersReducer = createReducer(
	initialState,
	on(loginUser, (state, action) => {
		console.log(action);
		return { ...state, loggedin: true };
	}),
	on(usersLoadedSuccess, (state, action) => {
		return {...state}
	})
);
