import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, throwError } from "rxjs";
import { MaterialModalComponent } from "../../material-modal/material-modal.component";

@Injectable()
export class Interceptor implements HttpInterceptor{

 constructor( 
     private modal: MaterialModalComponent
    ){}


 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError(
            (err: any) => { 
                //if(err.status === 401){
                    console.log(err);
                    this.modal.openDialog(err.status+" "+err.message);
                //}
                return throwError(()=> err);
            }
        )
    );     
 }
}
