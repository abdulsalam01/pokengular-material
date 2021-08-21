import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.scss']
})
export class PokelistComponent implements OnInit {

  constructor(private service: PokemonService, private route: Router) { }

  title = 'List of Pokemon!';
  dataList: any;
  isDone: boolean = false;

  ngOnInit() {
    // load data
    this.service.getPokemonList().subscribe((data: any) => {
      this.dataList = data;
      this.isDone = true;
    });
  }

  randomizeColor(): String {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
