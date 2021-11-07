import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: []
})
export class AgendaComponent implements OnInit {
  
  agendas: any[] = [];
  displayedColumns: string[] = ["nombres","apellidos","sexo","FehcaNacimiento","telefono","celular","email","direccion","acciones"];

  constructor(
    private agendaService: AgendaService
  ) { }

  ngOnInit(): void {

    this.agendaService.obtenerAgendas()
    .subscribe((a:any )=> this.agendas = a);
  }
  
}
