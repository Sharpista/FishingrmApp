import { Cidade } from './../models/cidade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private _http : HttpClient) { }

  getEstados(){
    return this._http.get<Estado[]>('../../assets/dados/estados.json');
  }

  getCidades(idEstado:number){
    return this._http.get<Cidade[]>('../../assets/dados/cidades.json').pipe(
      map((cidades : Cidade[]) => cidades.filter(c => c.estado == idEstado))
    )

  }


}
