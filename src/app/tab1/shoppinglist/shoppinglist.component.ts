import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../models/Article.model';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  listeArticle : Article[] = [
    {id : 1, nom : "Armoire", prix : 100},
    {id : 2, nom : "Coca", prix : 2},
    {id : 3, nom : "Iphone", prix : 10000},
  ]

  constructor(
    private modalCTRL : ModalController
  ) {}

   async openModal(id : number){
    let modal = await this.modalCTRL.create({
      component : DetailComponent,
      componentProps : {article : this.listeArticle.find(a => a.id == id)}
    })

    modal.present();
  }
}
