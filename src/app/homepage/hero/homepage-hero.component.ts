import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
	selector: 'app-homepage-hero',
	imports: [MatAnchor, MatIcon],
	templateUrl: './homepage-hero.component.html',
	styleUrl: './homepage-hero.component.scss',
})
export class HomepageHeroComponent {}
