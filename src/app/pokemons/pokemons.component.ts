import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
constructor(private pokemonsService : PokemonsService){}
pokemons: any[] = []
ngOnInit(): void {
  this.pokemonsService.getPokemons().subscribe((response:any)=>[
    response.results.forEach(result=>{
      this.pokemonsService.getMoreData(result.name).subscribe((uniqresponse:any)=>{
        this.pokemons.push(uniqresponse)
        console.log(this.pokemons)
      })
    })
  ]) 
}
}