import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Finance-app';

	firebaseConfig = {
		apiKey: 'AIzaSyDRvRNjS5dmFFvbGDU27rEm2rMAhCZUMN8',
		authDomain: 'finance-app-8224e.firebaseapp.com',
		projectId: 'finance-app-8224e',
		storageBucket: 'finance-app-8224e.appspot.com',
		messagingSenderId: '876942998162',
		appId: '1:876942998162:web:aedc332f871602a076c44b',
		measurementId: 'G-RZ7VHPE692'
	};

	app = initializeApp(this.firebaseConfig);

	constructor() {}
}
