import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { username: 'kevyn', email: 'kevyn.bultot@gmail.com', password: 'kevyn', grade: 'admin' },
    { username: 'lea', email: 'dourou.simon@gmail.com', password: 'lea', grade: 'user' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
