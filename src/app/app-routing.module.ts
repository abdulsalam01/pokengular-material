import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedetailComponent } from './pokedetail/pokedetail.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokellectionComponent } from './pokellection/pokellection.component';


const routes: Routes = [
  { path: 'pokemon/list', component: PokelistComponent },
  { path: 'pokemon/list/detail/:id', component: PokedetailComponent },
  { path: 'pokemy/collection', component: PokellectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
