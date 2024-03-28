import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../service/shopping.service';

@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.scss'],
})
export class AjoutarticleComponent  {

  id! : number
  nom! : string
  prix! : number

  constructor(
    private shopService : ShoppingService
  ) { }

  valider(){
    this.shopService.ajouter({
      id : this.id,
      nom : this.nom,
      prix : this.prix
    })

    this.id = 0
    this.nom = ""
    this.prix = 0
  }

}
