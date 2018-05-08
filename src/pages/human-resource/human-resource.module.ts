import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumanResourcePage } from './human-resource';

@NgModule({
  declarations: [
    HumanResourcePage,
  ],
  imports: [
    IonicPageModule.forChild(HumanResourcePage),
  ],
})
export class HumanResourcePageModule {}
