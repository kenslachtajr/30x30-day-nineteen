import { Component } from '@angular/core';
import { AuthService } from '@ngrx-energy-drinks/core-data';

@Component({
  selector: 'ngrx-energy-drinks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Energy Drinks MDV';

  links = [
    { path: '/energy-drinks', icon: 'work', title: 'Energy Drinks'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
