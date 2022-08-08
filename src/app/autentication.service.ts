import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from './model/login-response';
import { UtenteModel } from './model/utente';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {
  
  userPrivate!: BehaviorSubject<UtenteModel | null>;
  user!: Observable<UtenteModel | null>;
  protected baseUrl = environment.baseUrl;

  constructor(private router:Router,private httpClient: HttpClient) {
    
    let _user = null;

    if (typeof sessionStorage.getItem('user') === 'string') {
      _user = JSON.parse(sessionStorage.getItem('user')??'');
    }
    this.userPrivate = new BehaviorSubject<UtenteModel | null>(_user);
    this.user = this.userPrivate.asObservable();
  }

  get userValue(){
    return this.userPrivate.value;
  }

  login(user: string, password: string){
    
    return this.httpClient.post<LoginResponse>(`${this.baseUrl}authenticate`,{username:user,password:password}).pipe(
      map(response => {
        console.log(response);
        const account = new UtenteModel();
        account.username = user;
        account.password = password;
        account.ruoli = response.roles;
        account.token = response.token;
        this.userPrivate.next(account);
        sessionStorage.setItem('user', JSON.stringify(this.userValue));
        //session
        return account;
      })
    )
  }

  logout(){
    sessionStorage.removeItem('user');
    this.userPrivate.next(null);
    this.router.navigateByUrl('/core/home');
  }

  registrazione(obj: any) {
    return this.httpClient.post<any>(`${this.baseUrl}user/nuovoModifica`,obj).pipe(
      map(response => {
        console.log(response);
      })
    )
  }

  getSessionUser(): boolean{
    let loggato = false;
    if(sessionStorage.getItem('user') && sessionStorage.getItem('user') != "null"){
      loggato = true;
    }
    return loggato;
  }

}
