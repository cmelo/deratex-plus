import { Component } from '@angular/core';

import { SectionObserverDirective } from '../../shared/directives/section-observer.directive';
import { HomepageAboutComponent } from './about/homepage-about.component';
import { HomepageContactComponent } from './contact/homepage-contact.component';
import { HomepageCustomersComponent } from './customers/homepage-customers.component';
import { HomepageHeroComponent } from './hero/homepage-hero.component';
import { HomepageServicesComponent } from './services/homepage-services.component';
import { HomepageTestimonialsComponent } from './testimonials/homepage-testimonials.component';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.scss',
	imports: [
		SectionObserverDirective,
		HomepageHeroComponent,
		HomepageServicesComponent,
		HomepageCustomersComponent,
		HomepageAboutComponent,
		HomepageTestimonialsComponent,
		HomepageContactComponent,
	],
})
export class HomepageComponent {}
