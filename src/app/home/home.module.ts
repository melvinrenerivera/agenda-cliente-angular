import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { AgendaComponent } from './agenda/agenda.component';
import { EditAgendaComponent } from './edit-agenda/edit-agenda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAgendaComponent } from './create-agenda/create-agenda.component';



@NgModule({
  declarations: [
    LayoutComponent,
    AgendaComponent,
    EditAgendaComponent,
    CreateAgendaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
