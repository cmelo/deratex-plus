import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

import { HeadingComponent } from '@shared/components/heading/heading.component';

@Component({
	selector: 'app-homepage-services',
	templateUrl: './homepage-services.component.html',
	styleUrl: './homepage-services.component.scss',
	imports: [MatAnchor, MatIcon, MatChip, MatCardModule, HeadingComponent],
})
export class HomepageServicesComponent {}
