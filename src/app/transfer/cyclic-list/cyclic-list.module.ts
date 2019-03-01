import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CyclicListComponent} from './cyclic-list.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '', component: CyclicListComponent
}];

@NgModule({
  declarations: [
    CyclicListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CyclicListModule {
}
