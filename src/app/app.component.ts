import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Finance-app';

	constructor(private http: HttpClient) {
		http.get('/api/users').subscribe(data => {
			console.log(data);
		});
	}
}
