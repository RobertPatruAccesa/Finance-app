import { createReducer, on } from '@ngrx/store';
import { LoginUser, UserIsValid, LogoutUser } from './user.actions';
import { User } from '../../core/interfaces/user.interface';

export interface UsersState {
	userIsValid: boolean
}

const initialState: UsersState = {
	userIsValid: false
};

export const  loginUser = (state: UsersState) => {
	return {
		...state, 
		userIsValid: true
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
	on(LogoutUser, logOutUser)
)