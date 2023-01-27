import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
	'[Login Page] Login User', 
	props<{ username: string; password: string }>()
);

export const loadUsers = createAction(
	'[Login Page] Load Users'
);

export const usersLoadedSuccess = createAction(
	'[Login Page] Users Loaded Success'
);
