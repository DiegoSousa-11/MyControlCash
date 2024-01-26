import { Component, OnInit } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { ITabs } from '@models/ITabs';
import { AuthService } from '@services/auth.service';
import { MenuService } from '@services/menu.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	tabs$: Observable<ITabs> = this.menuService.getMenus();
	currentPath: string | undefined;

	constructor(private menuService: MenuService, private router: Router, private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.authSession().subscribe({
			error: (error) => {
				console.log(error);
				this.router.navigate(['']);
			}
		});

		this.router.events.subscribe({
			next: (data) => {
				if(data.type === EventType.Scroll && data.routerEvent.type === EventType.NavigationEnd) {
					this.currentPath = data.routerEvent.url;
				}
			}
		});
	}
}
