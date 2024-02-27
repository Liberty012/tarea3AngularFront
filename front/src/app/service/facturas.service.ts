import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from 'src/models/Facturas';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  crearFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(`${this.baseUrl}/facturas`, factura);
  }
}
