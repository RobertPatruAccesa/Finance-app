import { createReducer, on } from '@ngrx/store';
import { LoginUser, UserIsValid, LogoutUser, SetUserId } from './user.actions';
import { User } from '../../core/interfaces/user.interface';

export interface UsersState {
	userIsValid: boolean,
    userId: string
}

const initialState: UsersState = {
	userIsValid: false,
    userId: ''
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

export const setUserId = (state: UsersState, { userId }: any) => {
    return {
        ...state,
        userId
    }
}


export const usersReducer = createReducer(
	initialState,
	on(LoginUser, loginUser),
	on(LogoutUser, logOutUser),
    on(SetUserId, setUserId)
)