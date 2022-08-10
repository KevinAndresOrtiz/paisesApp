import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = '';
  existError: boolean = false;
  private _paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  get paises(){
    return [...this._paises];
  }

  buscar(){
    this.paisService.buscarPais(this.termino)
                    .subscribe({
                      next: (data) => {
                        this.existError = false;
                        console.log(data);
                        this._paises = data;
                      },
                      error: (__) => {
                        this.existError = true;
                        this._paises = []
                      }
                    });
  }
}
