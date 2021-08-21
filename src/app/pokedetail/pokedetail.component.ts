import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PokemonService } from '../pokedetail/pokelist.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss']
})
export class PokedetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private service: PokemonService,
    private route: ActivatedRoute
  ) {}

  id: string;
  pokeName: string;
  isDone: boolean = false;

  dialogRef: any;

  dataRemote: any;
  dataLocal: any;
  luckyData: any;

  buttonAttr: any = {
    text: 'Catch Me!',
    disable: false
  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getPokemonById(this.id).subscribe((data) => {
      this.dataRemote = data.data;
      this.isDone = true;
    });

    this.nonEmpty();
  }

  async nonEmpty() {
    this.dataLocal = await this.service.getPokemonLocalById(this.id).toPromise();

    if (this.dataLocal.pokemon.ID > 0) {
      this.buttonAttr.text = 'Already Catched!';
      this.buttonAttr.disable = true;
    }
  }

  async catchIt(templateRef: any) {
    this.luckyData = await this.service.getLuckyNumber().toPromise();

    this.dialogRef = this.dialog.open(templateRef, {
      width: '600px'
    });
  }

  async saveIt(data: any, template: any) {

    const body = {
      id: data.poke_list.id,
      picture: data.poke_list.sprites.front_default,
      name: this.pokeName,
    }

    await this.service.createPokemonLocal(body).toPromise();

    // show success dialog
    this.dialog.closeAll();
    this.dialogRef = this.dialog.open(template, {
      width: '300px'
    });

    // call it
    this.nonEmpty();
  }
}
