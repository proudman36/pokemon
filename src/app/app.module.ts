import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EquipoComponent } from './equipo/equipo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TeamComponent } from './team/team.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EquipoComponent,
        PokemonsComponent,
        TeamComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ]
})
export class AppModule { }
