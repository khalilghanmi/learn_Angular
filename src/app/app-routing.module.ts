import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo:'' , pathMatch: 'full'},
  { path: 'ajout' , component : AjoutComponent},
  { path: 'list' , component : ListComponent},
  { path: 'card', component : CardComponent},

  { path: '**', component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
