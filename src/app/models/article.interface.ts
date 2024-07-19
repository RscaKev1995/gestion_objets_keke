export interface Article {
    id: number;
    name: string;
    image: string;
    description: string;
    status: 'Disponible' | 'Disparu' | 'Indisponible';
    category: 'Jeu' | 'Livre' | 'Vêtements' | 'Technologie' | 'Cuisine' | 'Outil' ;
  }