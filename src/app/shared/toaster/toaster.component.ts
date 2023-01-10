import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-toaster',
	templateUrl: './toaster.component.html',
	styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
	@Input() message: String = 'Empty toaster';
	@Input() type: 'success' | 'danger' | 'warnning' = 'success';
	// @Input() icon: '&#10003;' | '&#33;' | 'warnning' = 'success';
}
