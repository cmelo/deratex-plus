import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltip } from '@angular/material/tooltip';

import { MenuService } from '../../services/menu.service';
import { ThemeService } from '../../services/theme.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
	selector: 'c-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	imports: [
		MatTabsModule,
		MatButtonModule,
		MatIcon,
		MatTooltip,
		LogoComponent,
	],
})
export class HeaderComponent {
	private _menu = inject(MenuService);
	public themeService = inject(ThemeService);

	public menu = this._menu.items;
	public active = this._menu.activeSection;
}
