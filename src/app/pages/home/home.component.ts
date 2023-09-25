import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITabs } from 'src/app/models/ITabs';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	tabs: ITabs[] = [];

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.setMenuTabs();
	}

	loadMenuTabs(): Observable<ITabs[]> {
		return this.http.get<ITabs[]>('../../../assets/mocks/tabs.json');
	}

	setMenuTabs(): void {
		this.loadMenuTabs().subscribe({
			next: (data) => this.tabs = data,
			error: (error) => console.error(error)
		});
	}
}
