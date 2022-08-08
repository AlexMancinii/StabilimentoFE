import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AutenticationService } from "src/app/autentication.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private auth: AutenticationService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //mi recupero l'utente dal service
        const user = this.auth.userValue;
        //controllo se l'utente è loggato e se ha il token
        const isLogged = user && user.token;
        if(isLogged){
            //mi resetto la req clonandola, inserendo il token dell'header
            req = req.clone({
                setHeaders:{
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        return next.handle(req);
    }
    
}