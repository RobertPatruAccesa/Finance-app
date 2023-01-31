import { createReducer, on } from '@ngrx/store';
import { LoginUser, UserIsValid } from './user.actions';
import { User } from '../../core/interfaces/user.interface';

export interface UsersState {
	users: Array<User>,
	userIsValid: boolean
}

const initialState: UsersState = {
	users: [],
	userIsValid: false
};

// export const UsersReducer = createReducer(
// 	initialState,
// 	on(loginUser, (state, action) => {
// 		console.log(action);
// 		return { ...state, loggedin: true };
// 	}),
// 	on(usersLoadedSuccess, (state, action) => {
// 		return {...state}
// 	})
// );

export const  loginUser = (state: UsersState, action: { user: User }) => {
	return {
		...state, 
		users: [...state.users, action.user]
	}
}

export const userIsValid = (state: UsersState, action: { isValid: boolean }) => {
	return {
		...state,
		userIsValid: action.isValid
	}
}


export const usersReducer = createReducer(
	initialState,
	on(LoginUser, loginUser),
	on(UserIsValid, userIsValid)
)