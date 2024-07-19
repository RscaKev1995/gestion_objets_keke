import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomePageComponent } from './app/components/home-page/home-page.component';
import { LoginComponent } from './app/login/login.component';
import { GuestComponent } from './app/guest/guest.component';
import { RegisterComponent } from './app/register/register.component';
import { NewArticleComponent } from './app/new-article/new-article.component';

const routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-article', component: NewArticleComponent }, 
];

const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));