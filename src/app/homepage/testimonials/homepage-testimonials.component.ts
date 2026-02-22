import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

import { HeadingComponent } from '@shared/components/heading/heading.component';

interface Testimonial {
	rating: number;
	text: string;
	authorName: string;
	authorType: string;
	authorInitial: string;
}

@Component({
	selector: 'app-homepage-testimonials',
	templateUrl: './homepage-testimonials.component.html',
	styleUrl: './homepage-testimonials.component.scss',
	standalone: true,
	imports: [MatIcon, HeadingComponent, MatCardModule],
})
export class HomepageTestimonialsComponent {
	testimonials: Testimonial[] = [
		{
			rating: 5,
			text: 'Veľmi rýchla a profesionálna služba. Mali sme problém s myšami v pivnici a už po prvom ošetrení bol problém vyriešený. Odporúčam!',
			authorName: 'Martin Horvát',
			authorType: 'Domácnosť - Bratislava',
			authorInitial: 'MH',
		},
		{
			rating: 5,
			text: 'Výborná spolupráca pri pravidelnej deratizácii našej výrobnej haly. Profesionálny prístup, flexibilita a spoľahlivosť.',
			authorName: 'Peter Novák',
			authorType: 'Výrobná spoločnosť - Trnava',
			authorInitial: 'PN',
		},
		{
			rating: 5,
			text: 'S Deratex Plus spolupracujeme už niekoľko rokov. Vždy spoľahliví, efektívni a za rozumnú cenu. Môžem len odporučiť.',
			authorName: 'Katarína Vášová',
			authorType: 'Správcovská spoločnosť - Nitra',
			authorInitial: 'KV',
		},
		{
			rating: 5,
			text: 'Profesionálny tým, ktorý presne vie, čo robí. Postreku proti komárom sme veľmi spokojní. Konečne si môžeme užívať záhradu!',
			authorName: 'Ján Kováč',
			authorType: 'Domácnosť - Senec',
			authorInitial: 'JK',
		},
		{
			rating: 5,
			text: 'Dezinfekcia kancelárskych priestorov prebehla perfektne. Minimálne rušenie prevádzky a výborná komunikácia.',
			authorName: 'Andrea Szabová',
			authorType: 'IT firma - Bratislava',
			authorInitial: 'AS',
		},
		{
			rating: 5,
			text: 'Rýchle riešenie problému s osími hniezdom. Prišli v ten istý deň a všetko bezpečne odstránili. Ďakujeme!',
			authorName: 'Robert Balog',
			authorType: 'Domácnosť - Pezinok',
			authorInitial: 'RB',
		},
	];
}
