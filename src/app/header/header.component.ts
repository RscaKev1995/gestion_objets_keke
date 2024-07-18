import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
