import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemonList = environment.base_api + "/pokemon";

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get<any>(`${this.pokemonList}/list`);
  }

  getPokemonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.pokemonList}/list/${id}`)
  }

  getPokemonLocalById(id: string): Observable<any> {
    return this.http.get<any>(`${this.pokemonList}-local/list/${id}`)
  }

  getLuckyNumber(): Observable<any> {
    return this.http.get<any>(`${this.pokemonList}-local/lucky`);
  }

  createPokemonLocal(data: any): Observable<any> {
    return this.http.post(`${this.pokemonList}-local/create`, data);
  }
}
