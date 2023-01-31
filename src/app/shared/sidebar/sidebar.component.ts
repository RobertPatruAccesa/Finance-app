import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsUserValid } from 'src/app/store/user/user.selector';
import { UsersState } from '../../store/user/user.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	userLogin$!: Observable<boolean>;

	constructor(private store: Store<UsersState>) {}

	ngOnInit(): void {
		this.userLogin$ = this.store.pipe(select(selectIsUserValid));

		// this.store.pipe(select(selectIsUserValid)).subscribe()
	}
}
