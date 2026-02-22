import {
	DestroyRef,
	Directive,
	ElementRef,
	OnInit,
	inject,
	input,
} from '@angular/core';

import { MenuId, MenuService } from '../services/menu.service';

@Directive({
	selector: '[cSectionObserver]',
})
export class SectionObserverDirective implements OnInit {
	private _el = inject<ElementRef<HTMLElement>>(ElementRef);
	private _activeSection = inject(MenuService);
	private _destroyRef = inject(DestroyRef);

	public cSectionObserver = input.required<MenuId>();

	public ngOnInit(): void {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.find((e) => e.isIntersecting);
				if (visible) {
					this._activeSection.activeSection.set(
						this.cSectionObserver(),
					);
				}
			},
			{ threshold: 0.4 },
		);

		observer.observe(this._el.nativeElement);
		this._destroyRef.onDestroy(() => observer.disconnect());
	}
}
