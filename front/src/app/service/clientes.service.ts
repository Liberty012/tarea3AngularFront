import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  buscarPorNombre(nombre: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/cliente/${nombre}`);
  }
}
