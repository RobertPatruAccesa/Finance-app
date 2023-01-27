import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';

@Injectable()
export class UserEffects {
	constructor(private actions$: Actions, private userService: UserService) {}

	loadUsers$ = createEffect(() =>
		this.actions$.pipe(
			ofType('[Login Page] Load Users'),
			mergeMap(() =>
				this.userService.getAllUser().pipe(
					map(users => ({
						type: '[Login Page] Users Loaded Success',
						payload: users
					}))
				)
			)
		)
	);
}
