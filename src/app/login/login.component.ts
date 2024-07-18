import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { AuthService } from '../services/auth-service.service';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public message: string = '';
  public messageColor: string = '';

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  onLogin() {
    const users = this.userService.getUsers();
    const foundUser = users.find(user => user.username === this.username && user.password === this.password);
    if (foundUser) {
      this.authService.login(foundUser);
      this.message = 'Connecté avec succès';
      this.messageColor = 'green';

      setTimeout(() => {
        this.router.navigate(['/guest']);
      }, 1000);
    } else {
      this.message = 'Nom d\'utilisateur / mot de passe non connu';
      this.messageColor = 'red';
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
