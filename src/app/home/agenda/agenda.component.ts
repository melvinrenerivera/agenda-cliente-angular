import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/auth.service';
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
    private agendaService: AgendaService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  delete(id:number){

    const ok = confirm("Esta seguro de eliminar este ligro");
    if(ok){
      this.agendaService.delete(id)
      .subscribe(r => {
        this.getAll();
      },
        error=> console.log(error));
    }
    
  }

  getAll(){
    this.agendaService.obtenerAgendas()
    .subscribe((a:any )=> this.agendas = a);
  }

  isAdmin(){
    return this.authService.isAdmin();
  }
}
