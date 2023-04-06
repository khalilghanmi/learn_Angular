import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NevbarComponent } from './nevbar/nevbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    FirstComponent,
    CardComponent,
    AjoutComponent,
    ListComponent,
    NevbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
