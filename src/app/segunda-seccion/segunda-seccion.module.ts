import { HabilidadesComponent } from './../habilidades/habilidades.component';
import { ExpLaboralComponent } from './../exp-laboral/exp-laboral.component';
import { EducacionComponent } from './../educacion/educacion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    EducacionComponent,
    ExpLaboralComponent,
    HabilidadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SegundaSeccionModule { }
