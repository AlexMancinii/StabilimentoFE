
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router"
import { AutenticationService } from "../../autentication.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService: AutenticationService){

    }

    //il metodo tornera true se la root è accessibile, false se non è accessibile
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user = this.authService.userValue;
        let accessoConsentito = false;
        if(user){
            //mi vado a recuperare il ruolo dalla route "Atteso", quello che ha l'accesso
            const roles = route.data['roles'] as Array<string>;
            //se i ruoli non ci sono la pagina è accessibile a tutti
            if(!roles){
                accessoConsentito = true;
            }else{

                //se il ruolo dell'utente corrisponde a quello atteso dalla route, accesso consentito
                roles.forEach(ruoloPagina => {
                    user.ruoli.forEach(ruoliUser => {
                        if(ruoloPagina === ruoliUser){
                            accessoConsentito = true;
                        }
                    });
                });
            }
        }
        //se il metodo arriva fin qui vuol dire che una precedente erano false e quindi non può accedere
        return accessoConsentito;
    }
    
}