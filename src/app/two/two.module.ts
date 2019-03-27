import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TwoPage } from './two.page';
import { CanDeactivateTwo } from './can-deactivate-two.service';

const routes: Routes = [
  {
    path: '',
    component: TwoPage,
    canDeactivate: [CanDeactivateTwo]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TwoPage],
  providers: [CanDeactivateTwo]
})
export class TwoPageModule {}
