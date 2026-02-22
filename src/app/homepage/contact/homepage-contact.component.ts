import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

import { HeadingComponent } from '@shared/components/heading/heading.component';

@Component({
	selector: 'app-homepage-contact',
	templateUrl: './homepage-contact.component.html',
	styleUrl: './homepage-contact.component.scss',
	imports: [MatIcon, HeadingComponent],
})
export class HomepageContactComponent {}
