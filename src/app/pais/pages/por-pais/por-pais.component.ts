import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string = '';
  existError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(){
    this.paisService.buscarPais(this.termino)
                    .subscribe({
                      next: (data) => {
                        this.existError = false;
                        console.log(data);
                        
                      },
                      error: (__) => {
                        this.existError = true;
                      }
                    });
  }
}
