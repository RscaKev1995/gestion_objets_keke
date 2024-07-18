import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule],
})
export class RegisterComponent {
  public username: string = '';
  public email: string = '';
  public password: string = '';
  public message: string = '';
  public messageColor: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onRegister() {
    if (this.username && this.email && this.password) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.message = 'Veuillez entrer une adresse email valide.';
        this.messageColor = 'red';
        return;
      }

      const newUser: User = { username: this.username, email: this.email, password: this.password, grade: 'user' };
      this.userService.addUser(newUser);
      console.log('Nouvel utilisateur inscrit:', newUser);
      this.message = 'Félicitations, vous êtes inscrit !';
      this.messageColor = 'green';

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.message = 'Veuillez remplir tous les champs';
      this.messageColor = 'red';
    }
  }
}
