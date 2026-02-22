import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { HeadingComponent } from '@shared/components/heading/heading.component';

interface Customer {
	title: string;
	description: string;
}

@Component({
	selector: 'app-homepage-customers',
	templateUrl: './homepage-customers.component.html',
	styleUrl: './homepage-customers.component.scss',
	imports: [MatAnchor, HeadingComponent, MatCardModule, MatIcon],
})
export class HomepageCustomersComponent {
	sectionTitle = 'Pre koho pracujeme';
	sectionDescription = 'Poskytujeme služby širokej škále zákazníkov';

	customers: Customer[] = [
		{
			title: 'Domy a Domácnosti',
			description:
				'Ochráňte svoj domov a rodinu pred škodcami. Bezpečné metódy vhodné pre deti a domáce zvieratá.',
		},
		{
			title: 'Firmy a kancelárie',
			description:
				'Profesionálne riešenia pre pracovné prostredie. Minimálne rušenie prevádzky.',
		},
		{
			title: 'Výrobné haly',
			description:
				'Špecializované služby pre priemyselné priestory a výrobné zariadenia.',
		},
		{
			title: 'Správcovské spoločnosti',
			description:
				'Zákonom nariadené pravidelné ošetrenia bytových domov a komplexov.',
		},
	];
}
