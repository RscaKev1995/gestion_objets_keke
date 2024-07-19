import { Component } from '@angular/core';
import { Article } from '../models/article.interface';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth-service.service';
import { User } from '../models/user.interface';
import { NewArticleComponent } from '../new-article/new-article.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, NewArticleComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articles: Article[] = [
    { id: 1, name: 'FC24', image: 'assets/img/fc24.jpg', description: 'Jeu de simulation de foot sur PS5', status: 'Disponible', category: 'Jeu' },
    { id: 2, name: 'Uncharted 4', image: 'assets/img/uncharted.jpg', description: 'Jeu d\'aventure mettant en scène Nathan Drake sur PS5', status: 'Indisponible', category: 'Jeu' },
    { id: 3, name: 'Harry Potter', image: 'assets/img/harrypotter.jpg', description: 'L\'intégrale des livres Harry Potter en édition collector', status: 'Disponible', category: 'Livre' },
    { id: 4, name: 'Air Force', image: 'assets/img/airforce.webp', description: 'Paire de Air Force 1 en daim pointure 47,5', status: 'Indisponible', category: 'Vêtements' },
    { id: 5, name: 'Jbl Charge 4', image: 'assets/img/jbl.webp', description: 'Enceinte portable Bluetooth JBL Charge 4', status: 'Disponible', category: 'Technologie' },
    { id: 6, name: 'Air Fryer Russel Hobbs', image: 'assets/img/russel.jpg', description: 'Air fryer permettant de cuire, frire, mijoter ou rôtir vos aliments', status: 'Disponible', category: 'Cuisine' },
  ];

  selectedArticle?: Article;
  selectedCategory: string = 'Tout';
  currentUser: User | null;
  showForm: boolean = false;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();
  }

  showNewArticleForm() {
    this.showForm = true;
  }

  addArticle(newArticle: Article) {
    newArticle.id = this.articles.length + 1;
    this.articles.push(newArticle);
    this.showForm = false;
  }

  showDetails(articleId: number) {
    this.selectedArticle = this.articles.find(article => article.id === articleId);
  }

  filterArticles(category: string) {
    this.selectedCategory = category;
  }

  get filteredArticles() {
    return this.selectedCategory === 'Tout'
      ? this.articles
      : this.articles.filter(article => article.category === this.selectedCategory);
  }
}
