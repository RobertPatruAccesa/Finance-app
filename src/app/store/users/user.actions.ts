import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
	'[Login Page] Login user', 
	props<{ username: string; password: string }>()
);
