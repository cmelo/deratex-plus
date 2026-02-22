import { Component, input } from '@angular/core';

@Component({
	selector: 'c-logo',
	imports: [],
	templateUrl: './logo.component.html',
	styleUrl: './logo.component.scss',
})
export class LogoComponent {
	public color = input('#ff0000');
}
