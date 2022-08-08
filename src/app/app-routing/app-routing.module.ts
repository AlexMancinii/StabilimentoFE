import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`../core/core.module`).then(m => m.CoreModule)
  },
  {
    path: 'autentication',
    loadChildren: () => import(`../autenticazione/auth.module`).then(m => m.AuthModule)
  },
  {
    path: 'core',
    loadChildren: () => import(`../core/core.module`).then(m => m.CoreModule)
  },
  {
    path:'**',
    redirectTo:'/core/errore404'
  }
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
