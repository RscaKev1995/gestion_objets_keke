import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';  

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  login(user: User) {
    this.currentUser = user;
  }

  logout() {
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
