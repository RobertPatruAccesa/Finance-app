import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoginUser } from '../store/user/user.actions';
// import { loginUser, loadUsers } from '../store/user/user.actions';
// import { altCeva, selectCeva } from '../store/user/user.selector';
import { User } from '../core/interfaces/user.interface';
import { UserService } from '../core/services/user.service';

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

	constructor(private store: Store, private userService: UserService) {}

	ngOnInit(): void {
	
	}

	onLogin() {
		this.user.username = this.username;
		this.user.password = this.password;


		this.store.dispatch(LoginUser({ user: this.user }));

	
	}
}
