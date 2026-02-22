import { Component, inject } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
	selector: 'c-footer',
	imports: [LogoComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	private _menu = inject(MenuService);

	public menu = this._menu.items;
}
