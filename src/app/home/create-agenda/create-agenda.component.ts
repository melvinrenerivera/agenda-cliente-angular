import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from '../shared/agenda.service';

@Component({
  selector: 'app-create-agenda',
  templateUrl: './create-agenda.component.html',
  styleUrls: []
})
export class CreateAgendaComponent implements OnInit {

  form! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private agendaService: AgendaService
  ) { }

  ngOnInit(): void {
   
    this.form = this.formBuilder.group({
      nombres : [,[Validators.required]],
      apellidos: [,[Validators.required]],
      email: [,[Validators.required]],
      telefono: [,[Validators.required]],
      celular: [,[Validators.required]],
      sexo: [,[Validators.required]],
      fechaNac: [,[Validators.required]],
      direccion: [,[Validators.required]]

    });

  }

  save(){
    console.log(this.form.valid);
    
      this.agendaService.save(this.form.value)
      .subscribe(()=>console.log("registrado con exito"));
    
    return ;
  }
 
}
