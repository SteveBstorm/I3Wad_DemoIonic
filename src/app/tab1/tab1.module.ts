import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { DetailComponent } from './detail/detail.component';
import { AjoutarticleComponent } from './ajoutarticle/ajoutarticle.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, ShoppinglistComponent, DetailComponent, AjoutarticleComponent]
})
export class Tab1PageModule {}
