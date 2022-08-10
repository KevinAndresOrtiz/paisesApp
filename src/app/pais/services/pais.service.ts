import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) {}

  buscarPais(termino: string) {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get(url);
  }
}
