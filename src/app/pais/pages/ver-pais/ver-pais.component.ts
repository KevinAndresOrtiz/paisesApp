import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private activateRoute: ActivatedRoute,
               private paisService: PaisService) { }

  ngOnInit(): void {
    this.activateRoute
                      .params
                      .pipe(
                        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
                        tap(console.log)
                      )
                      .subscribe(pais => {
                          this.pais = pais;
                      });
  }
}
