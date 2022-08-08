import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FornitoreModel } from './model/fornitore-model';


@Injectable({
    providedIn: 'root'
  })
  export class FornitoreService{

    protected UrlContainer = environment.baseUrl;
    constructor(private httpClient: HttpClient) {}


      getfornitore(id:number):Observable<FornitoreModel[]>
        {
        return this.httpClient.get<FornitoreModel[]>(`${this.UrlContainer}fornitore/findById/${id}`);
        }
      salva(object : any):Observable<FornitoreModel>
      {
        return this.httpClient.post<FornitoreModel>(`${this.UrlContainer}fornitore/nuovoModifica`, object);
        }
      getListaFornitore():Observable<FornitoreModel[]>
      {
        return this.httpClient.get<FornitoreModel[]>(`${this.UrlContainer}fornitore/list/`);
        }
      delete(id:number):Observable<FornitoreModel[]>
      {
        return this.httpClient.delete<FornitoreModel[]>(`${this.UrlContainer}fornitore/delete/${id}`); // se non funziona provare deleteById // DOPO {ID}' { ...Option, responseType: 'arraybuffer' })
        }
  }