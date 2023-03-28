import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from '../store/user/user.reducer';
import { ButtonComponent } from '../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
    let el: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoginComponent, ButtonComponent],
			providers: [Store],
			imports: [StoreModule.forRoot({ usersReducer }), FormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
        el = fixture.debugElement;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

    it('should have username and password inputs', () => {
        const usernameInput = el.query(By.css('.username'));
        expect(usernameInput).toBeTruthy("Could find username input");
        
        const passwordInput = el.query(By.css('.password'));
        expect(passwordInput).toBeTruthy("Could find password input");

        const loginButton = el.query(By.css('.login-button'));
        expect(loginButton).toBeTruthy("Could find login-button input");
    })
});
