import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
@Component({
  selector: 'app-guest',
  standalone: true,
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  imports: [ArticleComponent],
})
export class GuestComponent { }
