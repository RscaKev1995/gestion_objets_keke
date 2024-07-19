import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../models/article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  @Output() articleAdded = new EventEmitter<Article>();

  newArticle: Partial<Article> = {
    name: '',
    description: '',
    image: '',
    category: 'Catégorie', 
    status: 'Disponible'
  };

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newArticle.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.newArticle.name && this.newArticle.description && this.newArticle.image && this.newArticle.category) {
      this.articleAdded.emit(this.newArticle as Article);
      this.router.navigate(['/guest']);  
    }
  }

  onCancel() {
    this.router.navigate(['/guest']);  
  }
}
