import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    HomePageComponent,
    LoginComponent,
    GuestComponent,
    HeaderComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'object_keke';
  
}
