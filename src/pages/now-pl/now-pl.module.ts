import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NowPlPage } from './now-pl';

@NgModule({
  declarations: [
    NowPlPage,
  ],
  imports: [
    IonicPageModule.forChild(NowPlPage),
  ],
})
export class NowPlPageModule {}
