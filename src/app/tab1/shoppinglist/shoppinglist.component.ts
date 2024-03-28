import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../models/Article.model';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';
import { ShoppingService } from '../service/shopping.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  listeArticle! : Article[]

  constructor(
    private modalCTRL : ModalController,
    private shopService : ShoppingService
  ) {
    this.listeArticle = shopService.listeArticle

  }

   async openModal(id : number){
    let modal = await this.modalCTRL.create({
      component : DetailComponent,
      componentProps : {article : this.listeArticle.find(a => a.id == id)}
    })

    modal.present();
  }
}
