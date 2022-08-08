import { Component } from '@angular/core';
import { AutenticationService } from './autentication.service';
import { UtenteModel } from './model/utente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*panelOpenState = false;
  opened = false;
  
  user: UtenteModel | null = null;
  
  constructor(
    private authService:AutenticationService
  ){
    authService.userPublic.subscribe(
      (user)=>{
        this.user = user;
    })
  }

  logout(){
    this.authService.logout();
  }

  getSessionUser(): boolean{
    return this.authService.getSessionUser();
  }
 */
}
