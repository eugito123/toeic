import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinacePage } from './finace';

@NgModule({
  declarations: [
    FinacePage,
  ],
  imports: [
    IonicPageModule.forChild(FinacePage),
  ],
})
export class FinacePageModule {}
