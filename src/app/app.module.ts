
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FotoBannerComponent } from './foto-banner/foto-banner.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { ExpLaboralComponent } from './exp-laboral/exp-laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotoBannerComponent,
    InfoPersonalComponent,
    ExpLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    Pagina404Component,
    LoginUsuarioComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
