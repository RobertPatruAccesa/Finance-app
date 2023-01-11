import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Finance-app';

	constructor(private http: HttpClient, private router: Router) {
		http.get('/api/users').subscribe(data => {
			console.log(data);
		});


		console.log(router.config)
	}
}
