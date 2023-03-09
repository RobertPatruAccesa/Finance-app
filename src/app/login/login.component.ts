import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoginUser } from '../store/user/user.actions';

import { UserService } from '../core/services/user.service';
import { selectIsUserValid } from '../store/user/user.selector';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	userIsloggedin: boolean = false;
	showToaster: boolean = false;

	user = {
		email: '',
		password: ''
	};

	constructor(private store: Store, private userService: UserService) {}

	ngOnInit(): void {
		this.store.pipe(select(selectIsUserValid)).subscribe(res => (this.userIsloggedin = res));
	}

	onLogin() {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, this.user.email, this.user.password)
			.then(userCredential => {
				const user = userCredential.user;
                
                if (!!user) {
                    this.store.dispatch(LoginUser())
                }
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});


		setTimeout(() => {
			this.showToaster = true;
		}, 100);

		setTimeout(() => {
			this.showToaster = false;
		}, 2000);
	}
}
