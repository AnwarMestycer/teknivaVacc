import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { ListesvaccinComponent } from './listesvaccin/listesvaccin.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListesvaccinComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    
  ]
})
export class AccueilModule { }
