import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class NavModule { }
