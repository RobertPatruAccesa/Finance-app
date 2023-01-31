import { createAction, props } from '@ngrx/store';
import { User } from '../../core/interfaces/user.interface';

// export const loginUser = createAction(
// 	'[Login Page] Login User', 
// 	props<{ username: string; password: string }>()
// );

// export const loadUsers = createAction(
// 	'[Login Page] Load Users'
// );

// export const usersLoadedSuccess = createAction(
// 	'[Login Page] Users Loaded Success'
// );

export const LoginUser = createAction(
	'[Login Page] Login User',
	props<{user: User}>()
)

export const UserIsValid = createAction(
	'[Login Page] User is valid',
	props<{isValid: boolean}>()
)