import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';
import { LoginUser, UserIsValid } from './user.actions';

@Injectable()
export class UserEffects {
	loginUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LoginUser),
			mergeMap(user =>
				this.userService.getAllUser().pipe(map(users => !!users.find(el => el.username === user.user.username && el.password === user.user.password)))
			),
			map(isValid => UserIsValid({ isValid }))
		)
	);

	constructor(private actions$: Actions, private userService: UserService) {}
}
