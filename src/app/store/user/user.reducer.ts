import { createReducer, on } from '@ngrx/store';
import { LoginUser } from './user.actions';
import { User } from '../../core/interfaces/user.interface';

export interface UsersState {
	users: Array<User>
}

const initialState: UsersState = {
	users: []
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


export const usersReducer = createReducer(
	initialState,
	on(LoginUser, loginUser)
)