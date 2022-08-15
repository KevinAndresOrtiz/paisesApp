import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CAFTA','NAFTA','SAARC']
  regionActiva: string = '';
  private _paisesRegion: Country[] = [];
  constructor(private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  get paisesRegion(){
    return this._paisesRegion
  }

  activarRegion(region: string) {
    if(region == this.regionActiva) {return}
    this.regionActiva = region;
              this.paisService
                             .buscarRegion(region)
                             .subscribe({
                              next: (data) => {
                                 this._paisesRegion = data
                              },
                              error: (__) => {
                                this._paisesRegion = []
                              }
                             })
  }

  getClassCSS(region: string){
    return ( region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
