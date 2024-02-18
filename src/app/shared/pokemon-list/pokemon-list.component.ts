import { Component } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemon: any; 
  
  constructor(public pokemonService: PokemonService) { 
    this.pokemon = {};
  }
}
