import { createAction, props } from '@ngrx/store';

export const LoginUser = createAction(
	'[Login Page] Login User'
)

export const LogoutUser = createAction(
	'[Sidebar Nav] Logout User'
)

export const UserIsValid = createAction(
	'[Login Page] User is valid',
	props<{ isValid: boolean }>()
)

export const SetUserId = createAction(
    '[Login Page] Set user Id',
    props<{ userId: string }>()
)