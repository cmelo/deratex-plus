import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
	private _doc = inject(DOCUMENT);
	private _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	public theme = signal<Theme>(
		this._isBrowser ? this._getOsTheme() : 'light',
	);

	constructor() {
		if (!this._isBrowser) return;

		const mediaQuery = this._doc.defaultView!.matchMedia(
			'(prefers-color-scheme: dark)',
		);

		const onOsThemeChange = (e: MediaQueryListEvent) => {
			this.theme.set(e.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', onOsThemeChange);

		effect(() => {
			this._doc.documentElement.style.setProperty(
				'color-scheme',
				this.theme(),
			);
		});
	}

	public toggle(): void {
		this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	}

	private _getOsTheme(): Theme {
		return this._doc.defaultView!.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light';
	}
}
