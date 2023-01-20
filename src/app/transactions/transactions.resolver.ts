import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { filter, finalize, first, Observable, tap } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadAllTransactions } from './transactions.actions';
import { areTransactionsLoaded } from './transactions.selectors';
@Injectable()
export class TransactionsResolver implements Resolve<any> {
	loading: boolean = false;

	constructor(private store: Store) {}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		return this.store.pipe(
			select(areTransactionsLoaded),
			tap(transactionsLoaded => {
				if (!this.loading && !transactionsLoaded) {
					this.loading = true;
					this.store.dispatch(loadAllTransactions());
				}
			}),
			filter(transactionsLoaded => transactionsLoaded),
			first(),
			finalize(() => (this.loading = false))
		);
	}
}
