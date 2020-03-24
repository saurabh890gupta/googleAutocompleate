import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomemapComponent } from './homemap/homemap.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch:'full',
    component: HomemapComponent 
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
