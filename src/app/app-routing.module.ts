import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { FotoBannerComponent } from './foto-banner/foto-banner.component';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { Pagina404Component } from './pagina404/pagina404.component'; 
import { InicioComponent } from './inicio/inicio.component';

import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

const routes: Routes = [
    
    
    { path: '', component: InfoPersonalComponent },
    { path: 'exp-laboral', component: ExpLaboralComponent },
    { path: 'educacion', component: EducacionComponent},
    { path: 'habilidades', component: HabilidadesComponent},
    { path: 'login', component: LoginUsuarioComponent },
    { path: '**', component: Pagina404Component } 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
