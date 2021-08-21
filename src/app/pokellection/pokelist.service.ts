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

  getPokemonLocalList(): Observable<any> {
    return this.http.get<any>(`${this.pokemonList}-local/list`);
  }

  getLuckyNumber(): Observable<any> {
    return this.http.get<any>(`${this.pokemonList}-local/lucky`);
  }

  updatePokemonLocal(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.pokemonList}-local/update/${id}`, data);
  }

  deletePokemonLocal(id: string): Observable<any> {
    return this.http.delete(`${this.pokemonList}-local/delete/${id}`);
  }
}
