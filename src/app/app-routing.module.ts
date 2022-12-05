import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch:'full'},
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'teams',
    component:TeamsComponent
  },
  {
    path:'galeria',
    component:GaleriaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
