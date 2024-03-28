import { Injectable } from '@angular/core';
import { Article } from '../models/Article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  listeArticle : Article[] = [
    {id : 1, nom : "Armoire", prix : 100},
    {id : 2, nom : "Coca", prix : 2},
    {id : 3, nom : "Iphone", prix : 10000},
  ]

  ajouter(article : Article){
    this.listeArticle.push(article)
  }

  constructor() { }
}
