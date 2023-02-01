import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { UsersState } from 'src/app/store/user/user.reducer';
import { selectIsUserValid } from 'src/app/store/user/user.selector';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	access: boolean = false;

	constructor(private store: Store<UsersState>, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		this.store.pipe(select(selectIsUserValid)).subscribe(res => (this.access = res));
		if (!this.access) {
			alert('Log in first');
			return false;
		} else {
			return true;
		}
	}
}
