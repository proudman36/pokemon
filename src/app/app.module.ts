import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EquipoComponent } from './equipo/equipo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from './app-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EquipoComponent,
        PokemonsComponent,
        TeamComponent,
        GaleriaComponent,
        HomeComponent,
        TeamsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
