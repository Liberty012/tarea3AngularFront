import { Component } from '@angular/core';
import { FacturasService } from 'src/app/components/facturas.service';
import { Factura } from 'src/models/Facturas';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {

  nuevaFactura: Factura = {
    id: 0,
    importeTotal: 0 
  };


  constructor(private facturaService: FacturasService) { }

  crearFactura() {
    this.facturaService.crearFactura(this.nuevaFactura)
      .subscribe(() => {
        console.log('Factura creada exitosamente');
      }, error => {
        console.error('Error al crear la factura:', error);
      });
  }




}
