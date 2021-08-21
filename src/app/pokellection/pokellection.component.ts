import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from './pokelist.service';

@Component({
  selector: 'app-pokellection',
  templateUrl: './pokellection.component.html',
  styleUrls: ['./pokellection.component.scss']
})
export class PokellectionComponent implements OnInit {

  title = 'List of My Pokemon!';
  dataList: any;
  dataGetter: any;

  constructor(
    private dialog: MatDialog,
    private service: PokemonService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.get();
  }

  randomizeColor(): String {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  async release(data: any) {
    const isLucky = await this.service.getLuckyNumber().toPromise();

    // is it prime? release it forever!
    if (isLucky.is_prime) {
      this.service.deletePokemonLocal(data.pokemon.ID).subscribe(() => this.get());
    }

    this._snackBar.open(isLucky.is_prime ? 'Released, Good bye!' : 'Hmm, pokemon don\'t want it!', "Close");
  }

  showDialog(data: any, templateRef: any) {
    this.dataGetter = data;
    this.dialog.open(templateRef, {
      width: '600px'
    });
  }

  saveIt(data: any) {
    const id = data.pokemon.ID;
    const body = {
      name: data.pokemon.name
    }

    this.service.updatePokemonLocal(id, body).subscribe(() => {
      this._snackBar.open('Yeay, Updated!', "Close");
      this.dialog.closeAll();
      this.get();
    })
  }

  get() {
    // load data
    this.service.getPokemonLocalList().subscribe(data => this.dataList = data);
  }
}
