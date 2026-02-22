import { Injectable, signal } from '@angular/core';

const menu = [
	{ id: 'home', label: 'Domov' },
	{ id: 'services', label: 'Služby' },
	{ id: 'customers', label: 'Zákazníci' },
	{ id: 'about', label: 'O nás' },
	{ id: 'testimonials', label: 'Referencie' },
	{ id: 'contact', label: 'Kontakt' },
];

export type MenuId = (typeof menu)[number]['id'];

@Injectable({ providedIn: 'root' })
export class MenuService {
	// Zoznam položiek navigačného menu
	public items = menu;

	// ID aktuálne viditeľnej sekcie
	public activeSection = signal<MenuId>('home');
}
