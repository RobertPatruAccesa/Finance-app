import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginUser } from '../store/user/user.actions';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	successfulyRegistered: boolean = false;
	showToaster: boolean = false;
	count: number = 0;

	registrationForm!: FormGroup;

	user = {
		email: '',
		password: '',
		repeatPassword: ''
	};

	constructor(private router: Router, private store: Store) {}

	ngOnInit(): void {
		this.registrationForm = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required]),
			repeat_password: new FormControl(null, [Validators.required])
		});
	}

	onRegister() {
		if (this.registrationForm.status === 'VALID' && this.user.password === this.user.repeatPassword) {
			const auth = getAuth();

			createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
				.then(userCredential => {
					const user = userCredential.user;
					this.successfulyRegistered = true;
				})
				.catch(error => {
					const errorCode = error.code;
					const errorMessage = error.message;

					if (errorCode || errorMessage) {
						this.successfulyRegistered = false;
					}
				});
		}

		setTimeout(() => {
			this.showToaster = true;
		}, 500);

		setTimeout(() => {
			this.showToaster = false;
            this.router.navigate(['/login'])
		}, 3000);
	}
}
