import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { HeadingComponent } from '@shared/components/heading/heading.component';

@Component({
	selector: 'app-homepage-about',
	templateUrl: './homepage-about.component.html',
	styleUrl: './homepage-about.component.scss',
	imports: [MatAnchor, MatIcon, HeadingComponent],
})
export class HomepageAboutComponent {}
