import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerAgendas(){
      return this.http.get(`${environment.apiBase}/agenda`);
  }

  getAgenda(id:number){
    return this.http.get(`${environment.apiBase}/agenda/${id}`);
  }

  actualizar(id:number,agenda:any){
    return this.http.put(`${environment.apiBase}/agenda/${id}`,agenda);
  }
  save(agenda:any){
    return this.http.post(`${environment.apiBase}/agenda`,agenda);
  }
}
