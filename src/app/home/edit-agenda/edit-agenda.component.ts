import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-edit-agenda',
  templateUrl: './edit-agenda.component.html',
  styleUrls: []
})
export class EditAgendaComponent implements OnInit {

  agenda?: any;
  form! : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private agendaService: AgendaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      const  id = parseInt(this.route.snapshot.paramMap.get("id")!);
       this.agendaService.getAgenda(id)
       .subscribe((result:any) =>{

        this.agenda = result;
        this.inicializarForm();
       });

 
  }

  inicializarForm(){
    this.form = this.formBuilder.group({
      nombres : [this.agenda?.nombres,[Validators.required]],
      apellidos : [this.agenda?.apellidos,[Validators.required]],
      sexo: [this.agenda?.sexo,[Validators.required]],
      telefono : [this.agenda?.telefono,[Validators.required]],
      celular : [this.agenda?.celular,[Validators.required]],
      email : [this.agenda?.email,[Validators.required]],
      direccion: [this.agenda?.direccion,[Validators.required]],
      fechaNac: [this.agenda?.fechaNac,[Validators.required]]
    }); 
  }

  update(){
    if(!this.form.valid){
      return ;
    }
    this.agendaService.actualizar(this.agenda["id"],this.form.value)
    .subscribe(()=> console.log("registrado"));

  }
  
}
