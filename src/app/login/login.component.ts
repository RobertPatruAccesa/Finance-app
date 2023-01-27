import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../store/user/user.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	account = {
		username: 'Robert',
		password: '1234'
	};

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(loginUser({ username: this.account.username, password: this.account.password }));
	}
}
