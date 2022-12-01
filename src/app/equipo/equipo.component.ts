import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit{
  name : string 
  urlImg : string
  constructor(private equipoService : EquipoService){

  }
  ngOnInit(): void {
    
  }
  search(){
    this.equipoService.getPokemon(this.name).subscribe((data:any)=>{
      this.urlImg = data.sprites.front_default
      console.log(data);
    })
  }
}
