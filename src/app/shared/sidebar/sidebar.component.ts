import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsUserValid } from 'src/app/store/user/user.selector';
import { UsersState } from '../../store/user/user.reducer';
import { LogoutUser } from '../../store/user/user.actions';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	userIsLoggedin: boolean = false;

	constructor(private store: Store<UsersState>) {}

	ngOnInit(): void {
		this.store.pipe(select(selectIsUserValid)).subscribe(res => (this.userIsLoggedin = res));
	}

	onLogout() {
		this.store.dispatch(LogoutUser());
	}
}
