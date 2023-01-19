import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { finalize, first, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadAllTransactions } from './transactions.actions';
@Injectable()
export class TransactionsResolver implements Resolve<any> {
	loading: boolean = false;

	constructor(private store: Store) {}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		return this.store.pipe(
			tap(() => {
				if (!this.loading) {
					this.loading = true;
					this.store.dispatch(loadAllTransactions());
				}
			}),
			first(),
			finalize(() => (this.loading = false))
		);
	}
}
