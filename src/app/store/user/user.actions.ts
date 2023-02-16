import { createAction, props } from '@ngrx/store';
import { User } from '../../core/interfaces/user.interface';

export const LoginUser = createAction(
	'[Login Page] Login User',
	props<{ user: User }>()
)

export const LogoutUser = createAction(
	'[Sidebar Nav] Logout User'
)

export const UserIsValid = createAction(
	'[Login Page] User is valid',
	props<{ isValid: boolean }>()
)
