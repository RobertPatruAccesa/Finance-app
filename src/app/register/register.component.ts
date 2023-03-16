import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	successfulyRegistered: boolean = false;
	showToaster: boolean = false;

    registrationForm!: FormGroup;

	user = {
		email: '',
		password: '',
        repeatPassword: ''
	};

	constructor(private router: Router) {}

    ngOnInit(): void {
        this.registrationForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required] ),
            repeat_password: new FormControl(null, [Validators.required] )
        })
    }

	onRegister() {
        console.log(this.registrationForm);

		setTimeout(() => {
			this.showToaster = true;
		}, 100);

		setTimeout(() => {
			this.showToaster = false;
		}, 2000);
	}
}
