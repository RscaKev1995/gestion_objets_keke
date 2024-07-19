import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'guest', component: GuestComponent },
  {path: 'new-article',component:NewArticleComponent},
];