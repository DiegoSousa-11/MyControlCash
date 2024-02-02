import { Component, OnInit } from '@angular/core';
import { EventType, Router } from '@angular/router';
import { ITabs } from '@models/ITabs';
import { AuthService } from '@services/auth.service';
import { routes } from 'src/app/config/routes';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	tabs: ITabs = routes;
	currentPath: string | undefined;

	constructor(private router: Router, private authService: AuthService) {}

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
