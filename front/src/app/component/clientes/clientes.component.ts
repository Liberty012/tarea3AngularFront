import { Component } from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';
import { Cliente } from 'src/models/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes: Cliente[] = [];
  searchInput: string = '';

  constructor(private clienteService: ClientesService) { }

  searchCliente() {
    if (this.searchInput.trim() !== '') {
      this.clienteService.buscarPorNombre(this.searchInput.trim())
        .subscribe(clientes => {
          this.clientes = clientes;
        });
    } else {
      this.clientes = [];
    }
  }


}
