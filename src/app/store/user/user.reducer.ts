import { createReducer, on } from '@ngrx/store';
import { LoginUser, UserIsValid, LogoutUser } from './user.actions';
import { User } from '../../core/interfaces/user.interface';

export interface UsersState {
	users: Array<User>,
	userIsValid: boolean
}

const initialState: UsersState = {
	users: [],
	userIsValid: false
};

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

export const logOutUser = (state: UsersState) => {
	return {
		...state,
		userIsValid: false
	}
}


export const usersReducer = createReducer(
	initialState,
	on(LoginUser, loginUser),
	on(UserIsValid, userIsValid),
	on(LogoutUser, logOutUser)
)