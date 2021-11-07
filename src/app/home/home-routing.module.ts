import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { CreateAgendaComponent } from './create-agenda/create-agenda.component';
import { EditAgendaComponent } from './edit-agenda/edit-agenda.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path : '',
    component : LayoutComponent,
    children : [
      {
        path : '',
        component : AgendaComponent
      },
      {
        path : 'agenda/:id/editar',
        component : EditAgendaComponent
      },
      {
        path: 'agenda/new',
        component : CreateAgendaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
