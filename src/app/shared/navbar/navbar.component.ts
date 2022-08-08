import { Component, OnInit } from '@angular/core';
import { AutenticationService } from 'src/app/autentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  panelOpenState = false;
  opened = false;
  elementiMenu: any[] = [];

  constructor(
    private authService: AutenticationService
  ) 
  {
    this.elementiMenu = [
        {
          descrizione: 'Aliquota Iva',
          ruoli: ['OFFICE'],
          elementiSottoMenu: [
            {
              descrizioneSottoMenu: 'Nuova Aliquota Iva',
              routerLink: '/aliquota/aliquotaivanuovo',
            },
            {
              descrizioneSottoMenu: 'Elenco Aliquota Iva',
              routerLink: '/aliquota/aliquotaiva',
            }
          ]
        },
        {
          descrizione: 'Ordine Acquisto',
          ruoli: ['OFFICE'],
          elementiSottoMenu: [
            {
              descrizioneSottoMenu: 'Gestione Ordini',
              routerLink: '/ordineacquisto/gestioneOrdineAcquisto',
            },
            {
              descrizioneSottoMenu: 'Nuovo Ordine',
              routerLink: '/ordineacquisto/nuovoOrdineAcquisto',
            }
          ]
        }
    ]
  }

  logout() {
    this.authService.logout();
  }

  getSessionUser(): boolean {
    return this.authService.getSessionUser();
  }
  ngOnInit(): void {
    
  }

  filterElementNavbar(elementiNavbar: any[]): any[] {
    const user = this.authService.userValue;
    let lista: any[] = [];
    let trov: boolean = false;
    elementiNavbar.forEach(element => {
      trov = false;
      if (element.ruoli.length > 0) {
        element.ruoli.forEach((ruoloNav: string) => {
          user?.ruoli.forEach(ruoloUser => {
            if (ruoloNav === ruoloUser && trov == false) {
              trov = true;
            }
          });
        });
      } else {
        trov = true;
      }
      if(trov){
        lista.push(element);
      }
    });
   return lista;
  }


}
