import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';
import { LoginUser } from './user.actions';

@Injectable()
export class UserEffects {
	loginUser$ = createEffect(
		() => this.actions$.pipe(
			ofType(LoginUser),
			tap(user => console.log('User', user))
		),
		{ dispatch: false }
		
	)

	constructor(
		private actions$: Actions, 
		private userService: UserService
	) {}
}
