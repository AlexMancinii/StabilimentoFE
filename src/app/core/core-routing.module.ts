import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Errore404Component } from './errore404/errore404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '',component: HomeComponent},
      {path: 'home',component: HomeComponent},
      {path: 'errore404',component: Errore404Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
