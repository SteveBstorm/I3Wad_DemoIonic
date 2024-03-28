import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/Article.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {

  @Input() article! : Article

  constructor(
    private modalCTRL : ModalController
  ) { }

    close() {
      this.modalCTRL.dismiss()
    }

}
