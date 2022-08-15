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
  showTable: boolean = false
  private _paises: Country[] = [];
  private _paisesSugeridos: Country[] = []
  mostrarSugerencia: boolean = false

  constructor(private paisService: PaisService) {}

  get paises(){
    return [...this._paises];
  }

  get paisesSugeridos(){
    return [...this._paisesSugeridos];
  }

  buscar(termino: string){
    this.paisService.buscarPais(termino)
                    .subscribe({
                      next: (data) => {
                        this.existError = false;
                        this._paises = data;
                        this.showTable = true
                      },
                      error: (__) => {
                        this.existError = true;
                        this._paises = []
                        this.showTable = false;
                      }
                    });
  }

  sugerencia(termino: string) {
    this.existError = false;
    this.mostrarSugerencia = true
    this.paisService.buscarPais( termino )
                    .subscribe( {
                      next: (paises) =>{
                        this._paisesSugeridos = paises.splice(0,3)
                      },
                      error: (__) => {
                        this._paisesSugeridos = []
                      }
                    })
  }
}
