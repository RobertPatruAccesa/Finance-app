import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoginUser } from '../store/user/user.actions';
// import { loginUser, loadUsers } from '../store/user/user.actions';
// import { altCeva, selectCeva } from '../store/user/user.selector';
import { User } from '../core/interfaces/user.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	username: string = '';
	password: string = '';
	user = {
		username: 'Robert',
		password: '1234'
	};

	constructor(private store: Store) {}

	ngOnInit(): void {
		// this.store.dispatch(loginUser({ username: this.account.username, password: this.account.password }));
		// this.store.dispatch(loadUsers());
	}

	onLogin() {
		this.user.username = this.username;
		this.user.password = this.password;

		console.log(this.user);

		this.store.dispatch(LoginUser({ user: this.user }));
	}
}
